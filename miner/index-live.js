const { parseAndCheckLiveArguments } = require('./cli/CLI')
const {
  PacketEmitterLive,
  MetricAnalyser,
  PortUsageClusteredAnalyser,
  TopTwentyPortsByTrafficAnalyser,
  SynStateAnalyser 
} = require('./exports')

try {
  var settings = parseAndCheckLiveArguments(process.argv)
  analyseFileInProjectFolder(settings.interface, settings.filePath)  

} catch (e) {
  console.error(e.message)
  console.log(e.stack)
  process.exit(1)
}

function analyseFileInProjectFolder (interface, filePath) {
  var emitter = new PacketEmitterLive()

  var miners = [ MetricAnalyser, TopTwentyPortsByTrafficAnalyser, PortUsageClusteredAnalyser, SynStateAnalyser ]
  var activeMiners = miners.map(miner => new miner(emitter, filePath)) 

  setUpAndRun(emitter, activeMiners, interface, filePath)

}
async function setUpAndRun (emitter, activeMiners, interface, target) {
  // The NodeJS version used (10) does not support Promise.map
  for(miner of activeMiners) {
    await miner.setUp()
  }

  try {
    emitter.startLiveSession(interface)
    setTimeout(() => { emitter.stopLiveSession() }, 10000)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  emitter.on('complete', async () => {
    //var results = activeMiners.map(async (miner) => { return await miner.postParsingAnalysis() })
    var results = []
    for(miner of activeMiners) {
      var result = await miner.postParsingAnalysis()
      results.push(result)
    }

    var output = JSON.stringify(results)
    if(process && process.send) {
      // If this function exists in scope we know that we are in a forked ChildProcess
      // This will then send the output of the miners over IPC to the master process
      process.send(output)
    } else {
      console.log(output)
    }
  })
}

