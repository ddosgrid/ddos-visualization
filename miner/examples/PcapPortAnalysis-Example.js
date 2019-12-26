var path = require('path')
var PacketEmitter = require('../parser/PcapParser')
var PortScanAnalyser = require('../parser/PortScanAnalyser')
var testfile = path.resolve(__dirname, 'testdata', 'ebfe0afeea7f5417f340782d8a4d6f83portscan.pcap')
var outFile = path.resolve(__dirname, 'testdata', 'ebfe0afeea7f5417f340782d8a4d6f83portscan.pcap')

var emitter = new PacketEmitter()
var portAnalyser = new PortScanAnalyser(emitter, outFile)
var ipAnalyser = new IPv4Analyser(emitter, outFile)

setUpAndRun()

async function setUpAndRun () {
    await portAnalyser.setUp()
    await ipAnalyser.setUp()
    emitter.startPcapSession(testfile)
    emitter.on('complete', async () => {
        await portAnalyser.postParsingAnalysis()
        await ipAnalyser.postParsingAnalysis()
    })
}
