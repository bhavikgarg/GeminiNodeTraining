var express = require("express");
var app = express();
var router = express.Router();
// app.listen(3000);

// static resources 


router.get('/getUsers', function(req, res) {
    var data = [
        { name : "Aman", age : 23},
        { name : "Ashu", age : 24}
    ];
    res.status(200)
    res.json({ success : true, message : "Users data fetched", data : data});
    // res.write("<h1> Node JS is awesome </h1>");

    res.statusCode = 400;
    // res.send("<h1> Node JS is awesome </h1>");
    // res.end();
})




app.get('/getUsers', function(req, res) {
    var data = [
        { name : "Aman", age : 23},
        { name : "Ashu", age : 24}
    ];
    res.status(200)
    res.json({ success : true, message : "Users data fetched", data : data});
    // res.write("<h1> Node JS is awesome </h1>");

    res.statusCode = 400;
    // res.send("<h1> Node JS is awesome </h1>");
    // res.end();
})

// Path = /getUser/1
app.get('/getUser/:id', function(req, res) {
    var id = req.params.id;
    res.json({ success : true, id : id});
})

// Path = /getUser?id=2
app.get('/getUser', function(req, res) {
    var id = req.query.id; 
    res.json({ success : true, id: id});
})

app.get('/', function(req, res) {
    res.status(404).json({ success: false, message: "Not Found" });
})





var server = require('http').createServer(app);
server.listen(3000, function() {
    console.log("Server listening on port 3000");
});



