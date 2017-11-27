const ProgressBarPlugin = require('progress-bar-webpack-plugin')
module.exports = {
  devtool: "eval",
  plugins: [
    new ProgressBarPlugin()
  ]
}
