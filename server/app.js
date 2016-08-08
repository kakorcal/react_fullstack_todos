const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2000;

// NOTE: the callback inside app.use will only run once you goto localhost:2000

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