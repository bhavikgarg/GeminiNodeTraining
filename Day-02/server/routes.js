var express = require('express');
var router = express.Router();

/**
 *   /api/auth/login
 *   /api/user
 */

module.exports = function(app) {

    app.use('/api/auth', require('./api/auth'));
    app.use('/api/user', require('./api/user'));
    app.use('/api/dashboard', require('./api/dashboard'));

}

// module.exports = route;