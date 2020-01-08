const GenericPcapAnalyser = require('./GenericPcapAnalyser')

class IPVersionAnalyser extends GenericPcapAnalyser {
    constructor(parser, outPath) {
        super(parser, outPath);
        this.results = {
        }
    }
    // Setup phase, load additional databases, setup subscriptions and signal completion
    async setUp() {
        this.pcapParser.on('xy', this.handler)
    }
    // Actual mining function
    // Post-analysis phase, do additional computation with the collected data and write it out
    handler () {
    }
    async postParsingAnalysis() {
        var fileName = `${this.baseOutPath}-ipversion.json`
        var fileContent = {
          piechart: {
            datasets: [{
              backgroundColor: ['#D33F49',  '#77BA99'],
              vals: Object.values(this.results)
            }],
            labels: ['IPv4', 'IPv6']
          }
        }
        var summary = {
            fileName: fileName,
            attackCategory: 'IPversions',
            supportedDiagrams: ['PieChart']
        }
        return await this.storeAndReturnResult(fileName, fileContent, summary)
    }
}

module.exports = IPVersionAnalyser
