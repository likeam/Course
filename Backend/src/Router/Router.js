// helloRoutes.js
const express = require('express');
const router = express.Router();
const newController = require('../Controller/Controller')

router.get('/', newController.controller);

module.exports = router;