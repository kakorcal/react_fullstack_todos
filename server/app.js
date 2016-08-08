const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2000;
// NOTE: the callback inside app.use will only run once you goto localhost:2000

if(process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  
  // doesn't actually create bundle.js. it simulates it.
  app.use(require('webpack-dev-middleware')(compiler, {
    // simulates the dist folder
    publicPath: config.output.publicPath,
    stats: {colors: true}
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// the built bundle.js is put in here
app.use(express.static('./dist'));

app.get('/', (req, res)=>{
  // path.resolve() => returns absolute path of root directory
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, err=>{
  if(err) throw err;
  console.log(`Listening to port ${port}`);
});