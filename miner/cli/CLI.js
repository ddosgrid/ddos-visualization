const fs = require('fs')
const path = require('path')
module.exports = { parseAndCheckArguments, parseAndCheckLiveArguments }

function parseAndCheckArguments (argv) {
  if (argv.length === 2) {
    console.error('Supply at least the pcap file..')
    process.exit(1)
  }

  var settings = {
    pcapPath: '',
    pcapFile: '',
    aggregate: false,
    extractMetaInf: false
  }

  var pcap_file_param_pattern = /pcap_path=(.*)/
  var pcap_file_param = argv[2].match(pcap_file_param_pattern)

  if (pcap_file_param) {
    var filePath = pcap_file_param[1]
    if (fs.existsSync(filePath)) {
      settings.pcapPath = filePath
      settings.pcapFile = path.basename(filePath)
    } else {
      throw new Error('Provided pcap file doesnt exist!')
    }
  }

  return settings
}

function parseAndCheckLiveArguments (argv) {
  console.log(argv.length)
  if (argv.length === 2) {
    console.warn('You did not supply a interface description. Defaulting to "enp3s0"')
    var settings = {
      interface: 'enp3s0',
      captureFilter: '',
      filePath: '',
      pcapFile: new Date().toJSON()
    }
    return settings
  } else {
    var settings = {
      interface: 'enp3s0',
      captureFilter: '',
      filePath: ''
    }
    var interface_param_pattern = /target_interface=(.*)/
    var filepath_param_pattern = /file_path=(.*)/
    var interface_param = argv[2].match(interface_param_pattern)
    var file_path = argv[3].match(filepath_param_pattern)

    if (file_path && interface_param) {
      var targetInterface = interface_param[1]
      settings.interface = targetInterface

      if (fs.existsSync(file_path) || true) {
        settings.filePath = file_path
        setings.pcapFile = new Date().toJSON()
      } else {
        throw new Error('Provided destination path doesnt exist!')
      }
    }
    return settings
  }
}
