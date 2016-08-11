const webpack = require('webpack');
const dev = require('./webpack.dev.config');
const prod = require('./webpack.prod.config');
const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const path = require('path');

// for font awesome config: http://www.mattzabriskie.com/blog/font-awesome-webpack#disqus_thread
// for dev and prod: http://blog.npirotte.be/a-strong-development-webpack-configuration/

var config;
switch(process.env.npm_lifecycle_event){
  case 'dev':
    config = dev;
    break;
  case 'build':
    config = prod;
    break;
  case 'postinstall':
    config = prod;
  case 'start':
    config = prod;
  default:
    throw "Invalid command"
}

module.exports = validate(config);