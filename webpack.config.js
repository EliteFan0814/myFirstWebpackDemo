const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.(png|jpg|git)$/,
        use:{
          loader:'url-loader',
          options:{
            name:'[path][name].[ext]',
            limit:10240
          }
        }
      },
      {
        test:/\.(eot|woff|ttf|svg)$/,
        use:{
          loader:'file-loader',
          options:{
            name:'[path][name].[ext]',
          }
        }
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              importLoaders:2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}