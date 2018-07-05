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
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },

      // the following 3 rules handle font extraction
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },

      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
      }
    ]
  },
  output: {
    path: __dirname + '/web',
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  plugins: [
    htmlWebPackPluginConfig
  ],
  devServer: {
    historyApiFallback: true
  }
}
