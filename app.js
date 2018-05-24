
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-type' : 'text/json'});
    
    var myObj = {
        name: "yong", 
        job: 'Student', 
        age: 26
    };
    res.end(JSON.stringify(myObj))

});
server.listen(3000, '127.0.0.1'); 
console.log('json listens to port 3000');