const webpack = require('webpack');
const parts = require('./webpack.parts');
const merge = require('webpack-merge')
const validate = require('webpack-validator');
const path = require('path');

const common = {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: /(client|components)/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

let config;
switch(process.env.npm_lifecycle_event){
  case 'start': 
    config = merge(common, parts.entry('dev'), parts.hmr());
    break;
  case 'build':
    config = merge(common, parts.entry('prod'), parts.clean(['dist']));
    break;
  default:
    throw "Invalid command"
}

module.exports = validate(config);