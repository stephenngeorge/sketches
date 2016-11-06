const http = require('http');
const express = require('express');

const app = express();

let server = app.listen(3000, () => {
  console.log('listening. . .');
});


app.use(express.static('public'));
app.get('/test', (req, res) => {
  console.log(`request: ${req.url}`);
  res.send('loud & clear');
});
