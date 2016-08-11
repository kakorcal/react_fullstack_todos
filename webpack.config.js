const webpack = require('webpack');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const path = require('path');

// for font awesome config: http://www.mattzabriskie.com/blog/font-awesome-webpack#disqus_thread
// for dev and prod: http://blog.npirotte.be/a-strong-development-webpack-configuration/

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