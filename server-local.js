const express = require('express');
const app = express();
const path = require('path');

// This serves static files from the specified directory
app.use(express.static(path.join(__dirname, 'public')));
const server = app.listen(8081, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});