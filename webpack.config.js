const webpack = require('webpack');
const validate = require('webpack-validator');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'source-map',
  entry: {
    app: path.resolve('client', 'index.jsx')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: /(client|components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      // location of webpack.config.js
      root: __dirname,
      // logger
      verbose: true
    })
  ]
};

module.exports = validate(config);