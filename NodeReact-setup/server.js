const express = require('express');
const routes = require('./routes/index.js');

const app = express();

let server = app.listen(process.env.PORT || 3000, () => {
  console.log('listening. . .');
});


app.use('/', routes);
