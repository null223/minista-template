const path = require("path")
const webpack = require('webpack')

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ['import-glob-loader']
      },
      {
       test: /\.(png|jpe?g|gif)$/i,
       loader: 'file-loader',
       options: {
         name: 'images/[name].[ext]',
       },
     },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}

module.exports = webpackConfig
