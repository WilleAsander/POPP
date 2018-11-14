var express = require('express');
var router = express.Router();

var home_controller = require('../Controllers/home.controller');

router.get('/', home_controller.home);
router.get('/hello', home_controller.test);

module.exports = router;