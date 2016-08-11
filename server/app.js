const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./api/index');
const port = process.env.PORT || 2000;
const prodFile = path.resolve('dist/index.html');
const devFile = path.resolve('client/index.html');
const entryPoint = process.env.NODE_ENV === 'production' ? prodFile : devFile;
// NOTE: the callback inside app.use will only run once you goto localhost:2000

app.use(require('morgan')('tiny'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  let bundleStart = null;
  
  // doesn't actually create bundle.js. it simulates it.
  app.use(require('webpack-dev-middleware')(compiler, {
    // simulates the dist folder
    // NOTE: the bundle must be created inside the dist folder or else it can't find it.
    publicPath: config.output.publicPath,
    stats: {
      // Config for minimal console.log
      colors: true,
      chunkModules: false
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// the built bundle.js is put in here
app.use(express.static('./dist'));
app.use('/api/todos', routes.todos);

app.get('/', (req, res)=>{
  // path.resolve() => returns absolute path of root directory
  res.sendFile(entryPoint);
});

app.use((req, res, next)=>{
  const err = new Error('Oops!!');
  err.status = 404;
  next(err);
});

app.use((err, req, res)=>{
  res.status(err.status || 500);
  res.end(JSON.stringify({message: err.message, error: {}}));
});

app.listen(port, err=>{
  if(err) throw err;
  console.log(`Listening to port ${port}`);
});