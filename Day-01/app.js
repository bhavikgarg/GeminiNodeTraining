var http = require("http");
var url = require("url");

function isStaticFile(path) {
    var allowedExtns = ['.html'];
    var extn = path.split(".")[1];
    if(allowedExtns.indexOf(extn) > -1) {
        return true
    }
    return false;
}


var server = http.createServer(function(req, res) {
    console.log("A connection is established");
    console.log("Resource : ", req.url);
    var requestedUrl = url.parse(req.url);

    if(requestedUrl.pathname.indexOf('getUsers')) {

    } else if (isStaticFile(requestedUrl.pathname)) {
        // read file 
        var data = "hdfjbfjvbfjvbfkjvbf";
        res.write(data);
        res.end();
    }
})
server.listen(9000);

console.log("Server listening to 9000");