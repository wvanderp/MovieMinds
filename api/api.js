'use strict';

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();


// define the home page route
router.get('/', (req, res) => {
  res.send('this is api');
});




module.exports = router;
