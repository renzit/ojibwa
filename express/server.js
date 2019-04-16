// 'use strict';
// const express = require('express');
// const serverless = require('serverless-http');
// const app = express();
// const bodyParser = require('body-parser');

// const router = express.Router();
// router.get('/', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write(`<h1>Maximiliano Echenique</h1>`);
//   res.end();
// });
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
// app.use('/.netlify/functions/server', router);  // path must route to lambda

// module.exports = app;
// module.exports.handler = serverless(app);


'use strict';
const express = require('express');
// const serverless = require('serverless-http');
const app = express();
// const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.sendfile(__dirname+'/public/index.html');
});
// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
app.use(express.static('public'), router)
// app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
// module.exports.handler = serverless(app);