const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const common = {
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    // see issue: http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts
    publicPath: 'http://localhost:2000/'
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
        // NOTE: if you are requiring css frameworks directly into js/jsx files
        // you need to need to take out the include property so that it can search node_modules.
        // for some reason, it will work with the include property if you use @import in the scss file.
        include: /(client|src)/
      }, 
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, 
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

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
      // NOTE: you can't use this with the ExtractTextPlugin
      new webpack.HotModuleReplacementPlugin(),
      // don't allow webpack to finish building if an error occurs
      new webpack.NoErrorsPlugin()
    ]
  }
}