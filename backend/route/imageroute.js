const express = require('express');
const router = express.Router(); 
const axios = require('axios');
const contfunc = require('../controler/imagecont');
router.get('/',contfunc);

module.exports = router;    