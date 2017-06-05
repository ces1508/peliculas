var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
var path = require('path')
require('babel-core/register')
require('babel-polyfill')

function resolve (dir) {
  return path.join(__dirname, dir)
}

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

const frontend = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {'@': resolve('src')}
  },

  entry: {
    app :  ['babel-polyfill', resolve('src/app.js')],
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test:  /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1, modules: true, localIdentName: '[name]__[hash:base64:5]'
          }
      }],
      },
      {
        test: /\.(jpg|png|gif|eot|ttf|woff|woff2|svg)$/,
        use: [{
          loader: 'file-loader',
          options:{
            name: 'assets/img/[name].[ext]'
          }
        }]
      }
    ]
  }
}
const server = {
entry: {
  server: ['babel-polyfill', resolve('src/server.js')]
},
  output: {
    path: resolve(''),
    filename: 'server.js'
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test:  /\.json$/, loader: 'json-loader' },
    ]
  },
  target: 'node',
}

module.exports =  [
  server,
  frontend
]
