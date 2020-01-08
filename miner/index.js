const { parseAndCheckArguments } = require('./cli/CLI')
const { PacketEmitter, PortAnalyser, MetricAnalyser, PortUsageClusteredAnalyser, TopTwentyPortsByTrafficAnalyser, SynStateAnalyser, IPVersionAnalyser } = require('./exports')
try {
  var settings = parseAndCheckArguments(process.argv)
  analyseFileInProjectFolder(settings.pcapPath)  

} catch (e) {
    console.error(e.message)
    process.exit(1)
}

function analyseFileInProjectFolder (projectPath, cb) {
    var emitter = new PacketEmitter()
    var portAnalyser = new PortAnalyser(emitter, projectPath)
    var metricAnalyser = new MetricAnalyser(emitter, projectPath)
    var topTwentyAnalyser = new TopTwentyPortsByTrafficAnalyser(emitter, projectPath)
    var clusteredAnalyser = new PortUsageClusteredAnalyser(emitter, projectPath)
    var synStateAnalyser = new SynStateAnalyser(emitter, projectPath)
    var ipVersionAnalyser = new IPVersionAnalyser(emitter, projectPath)

    setUpAndRun(emitter, portAnalyser, metricAnalyser, topTwentyAnalyser, clusteredAnalyser, synStateAnalyser, ipVersionAnalyser, projectPath, cb)

}
async function setUpAndRun (emitter, portAnalyser, metricAnalyser, topTwentyAnalyser, clusteredAnalyser, synStateAnalyser, ipVersionAnalyser, target, cb) {
    await portAnalyser.setUp()
    await metricAnalyser.setUp()
    await topTwentyAnalyser.setUp()
    await clusteredAnalyser.setUp()
    await synStateAnalyser.setUp()
    await ipVersionAnalyser.setUp()

    try {
        emitter.startPcapSession(target)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }

    emitter.on('complete', async () => {
        var portAnalysisResult = await portAnalyser.postParsingAnalysis()
        var metricAnalysisResult = await metricAnalyser.postParsingAnalysis()
        var topTwentyResult = await topTwentyAnalyser.postParsingAnalysis()
        var clusteredResult = await clusteredAnalyser.postParsingAnalysis()
        var synResult = await synStateAnalyser.postParsingAnalysis()
        var ipResult = await ipVersionAnalyser.postParsingAnalysis()
        console.log(`Miners for ${target} have finished\n`)
        var output = JSON.stringify({
          portanalysis: portAnalysisResult,
          general: metricAnalysisResult,
          topTwenty: topTwentyResult,
          clusteredPorts: clusteredResult,
          synResult: synResult,
          ipResult: ipResult
        })
        if(process && process.send) {
            // If this function exists in scope we know that we are in a forked ChildProcess
            // This will then send the output of the miners over IPC to the master process
            process.send(output)
        } else {
            console.log(output)
        }
    })
}

