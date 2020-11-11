const { config } = require('./wdio.conf')

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 2,
        browserName: 'firefox'
      }
    ],
    services: ['geckodriver']
  }
}
