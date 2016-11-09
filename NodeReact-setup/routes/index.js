const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`request: ${req.url}`);
  res.sendFile('/Volumes/Solomon/development/NodeReact-setup/public/index.html');
});
router.get('/api', (req, res) => {
  console.log(`request: ${req.url}`);
  res.send("<h2>API lives here</h2>");
});


module.exports = router;
