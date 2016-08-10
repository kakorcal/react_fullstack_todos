const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

exports.entry = function(env){
  switch(env){
    case 'dev':
      return {
        entry: [
          'webpack-hot-middleware/client',
          'babel-polyfill',
          path.resolve('client', 'index.jsx')
        ]
      };
    case 'prod':
      return {
        entry: {
          app: path.resolve('client', 'index.jsx')
        }
      };
    default: 
      throw 'Invalid Entry'
  }
};

exports.clean = function(paths){
  return {
    plugins: [
      new CleanWebpackPlugin(paths, {
        // location of webpack.config.js
        root: path.resolve(),
        // logger
        verbose: true
      })
    ]
  };
};

exports.hmr = function(){
  return {
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // don't allow webpack to finish building if an error occurs
      new webpack.NoErrorsPlugin()
    ]
  }
}