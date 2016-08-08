const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 2000;

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production'){
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.join(__dirname, '../client', 'public')));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.use((req, res, next)=>{
  const err = new Error(404);
  err.message = 'Not Found';
  next(err);
});

app.end((err, req, res)=>{

  res.send(err);
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});