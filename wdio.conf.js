require('dotenv').config()

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      acceptInsecureCerts: true
    },
    {
      maxInstances: 2,
      browserName: 'firefox'
    }
  ],
  logLevel: 'info',
  bail: 0,
  specFileRetries: 2,
  baseUrl: process.env.ACCEPTANCE_URL,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'geckodriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 240000,
    require: ['@babel/register']
  }
}
