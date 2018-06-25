const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
      rule:[{
          test: /\.js$/,
          loader: 'babel-loader'
      },
      {
          test: /\.vue$/,
          loader: 'vue-loader'
          }     
    ]
  },
  plugins: [new VueLoaderPlugin()]

};