const webpackConfig = require('../../../config/webpack/test.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: ['./index.js'],
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    preprocessors: { './index.js': ['webpack'] },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.ERROR_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
