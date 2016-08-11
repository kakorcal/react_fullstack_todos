const webpack = require('webpack');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
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
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /(client|src)/,
        query: {
          presets: ['es2015', 'react', 'stage-2', 'react-hmre']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: /(client|src)/
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