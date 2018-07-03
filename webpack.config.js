const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: __dirname + '/web/index.html',
  inject: 'body'
});

module.exports = {
  entry: './index.web.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: __dirname + '/web',
    filename: 'index_bundle.js'
  },
  plugins: [
     htmlWebPackPluginConfig
  ]
}
