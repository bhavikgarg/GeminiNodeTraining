var express = require("express");
var app = express();

require('./routes')(app);

// app.use(router);

var server = require('http').createServer(app);
server.listen(9000, function() {
    console.log("Server is running on 9000");
})

module.exports = app;

