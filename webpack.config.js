const webpack = require('webpack');
const path = require('path');

module.exports = {
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
        loader: 'babel',
        test: /\.jsx?$/,
        include: /client/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};