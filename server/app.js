const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 2000;

// the built bundle.js is put in here
app.use(express.static('./dist'));

app.use('/', (req, res)=>{
  res.sendFile(path.resolve('client/index.html'));
});

app.listen(port, err=>{
  if(err) throw err;
  console.log(`Listening to port ${port}`);
});