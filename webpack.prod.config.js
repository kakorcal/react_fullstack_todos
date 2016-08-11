const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: path.resolve('client', 'index.jsx'),
    styles: [
      path.resolve('node_modules', 'purecss'),
      path.resolve('node_modules', 'font-awesome/css', 'font-awesome.min.css'),
      path.resolve('src/styles', 'base.scss')
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    path: path.resolve('dist'),
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /(client|src)/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
        include: /(client|src|node_modules)/
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
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      // location of webpack.config.js
      root: path.resolve(),
      // logger
      verbose: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('client', 'template.html'),
      filename: 'index.html',
      hash: true
    }),
    new PurifyCssPlugin({
      basePath: process.cwd(),
      paths: [path.resolve('client')],
      purifyOptions: {
        minify: true,
        info: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ]
};

module.exports = config;