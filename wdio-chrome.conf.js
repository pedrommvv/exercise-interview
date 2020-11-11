const { config } = require('./wdio.conf')

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true
      }
    ],
    services: ['chromedriver']
  }
}
