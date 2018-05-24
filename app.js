

var http = require('http'); //  uses the HTTP server to process requests and send subsequent responses.
var fs = require('fs');

var server = http.createServer(function(req, res){ //creates the web server object.
    console.log('request was made: '+req.url);
    res.writeHead(200, {'Content-type': 'text/plain'});//sends a response header in the form of a status code along with the exact header message.

    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); 
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1'); //accepts connections on port 300 on URL http://127.0.0.1 (or http://localhost).
console.log('yo, now listening to port 3000');