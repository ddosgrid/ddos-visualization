const { parseAndCheckArguments } = require('./cli/CLI')
const {
  PacketEmitter,
  MetricAnalyser,
  PortUsageClusteredAnalyser,
  TopTwentyPortsByTrafficAnalyser,
  SynStateAnalyser,
  IPVersionAnalyser,
  Top5SourceHostsAnalyser,
  Top100SourceHostsAnalyser
} = require('./exports')

try {
  var settings = parseAndCheckArguments(process.argv)
  console.log('✓ Input check completed') 
  analyseFileInProjectFolder(settings.pcapPath)
} catch (e) {
  console.error(e.message)
  process.exit(1)
}

function analyseFileInProjectFolder (projectPath) {
  console.log('✓ Analysis started')
  var emitter = new PacketEmitter()

  var miners = [ MetricAnalyser,
    TopTwentyPortsByTrafficAnalyser,
    PortUsageClusteredAnalyser,
    SynStateAnalyser,
    IPVersionAnalyser,
    Top5SourceHostsAnalyser,
    Top100SourceHostsAnalyser
  ]
  var activeMiners = miners.map(Miner => new Miner(emitter, projectPath))

  setUpAndRun(emitter, activeMiners, projectPath)
}
async function setUpAndRun (emitter, activeMiners, target) {
  // The NodeJS version used (10) does not support Promise.map
  for (var miner of activeMiners) {
    await miner.setUp()
  }
  console.log('✓ Setup of the following miners has completed:')
  activeMiners.forEach(miner => {
    console.log(`\t- ${miner.getName()}`)
  })

  try {
    emitter.startPcapSession(target)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  emitter.on('complete', async () => {
    console.log('✓ Decoding has finished, starting post-parsing analysis')
    // var results = activeMiners.map(async (miner) => { return await miner.postParsingAnalysis() })
    var results = []
    for (var miner of activeMiners) {
      var result = await miner.postParsingAnalysis()
      results.push(result)
    }
    console.log('✓ All miners have finished.')
    var output = JSON.stringify(results)
    if (process && process.send) {
      // If this function exists in scope we know that we are in a forked ChildProcess
      // This will then send the output of the miners over IPC to the master process
      process.send(output)
    } else {
      console.log(output)
    }
  })
}
