'use strict';

var express = require('express');
var controller = require('./fb.controller');
var config = require('../../config/environment');


var router = express.Router();

router.post('/', controller.index);

module.exports = router;