// helloRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world From Router');
});

module.exports = router;