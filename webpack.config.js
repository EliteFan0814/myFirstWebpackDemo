const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: false
  },
  module: {
    rules: [{
        test: /\.(png|jpg|git)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]',
            limit: 10240
          }
        }
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([{
      from: 'src/assets',
      to: 'src/assets'
    }])
  ]
}