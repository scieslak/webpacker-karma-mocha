process.env.BABEL_ENV = 'test'
const webpackConfig = require('../../../config/webpack/test.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['./index.test.js'],
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    preprocessors: { './index.test.js': ['webpack'] },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'json', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.ERROR_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
