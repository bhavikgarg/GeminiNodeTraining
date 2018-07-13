var express = require('express');
var router = express.Router();
var authController = require('./auth.controller');


router.get('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;