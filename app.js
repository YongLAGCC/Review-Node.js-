// // function express

// function callFunction(fun){
//     fun(); 
// }
// var sayBye = function(){
//     console.log('bye');
// };
// callFunction(sayBye);

// //module
// module.exports = counter; 

// const count = require('./count');
// console.log(count.counter(['1','2']));
// console.log(count.adder(3,5));
// console.log(count.pi);

// // events

// var events = require('events');

// var myEmitter = new events.EventEmitter(); 

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg); 
// });

// myEmitter.emit('someEvent', 'the event was emitted');


// // console.log('~~~~~~~util module(inherite)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`')


// var events = require('events');
// var util = require('util'); 

// var Person = function(name){
//     this.name = name; 
// }

// util.inherits(Person, events.EventEmitter); 

// var james = new Person('james'); 
// var mary = new Person('mary'); 
// var ryu = new Person('ryu'); 
// var people = [james, mary, ryu];

// people.forEach(function(person){
//     person.on('speak', function(mssg){
//         console.log(person.name + 'said: ' + mssg); 
//     });
// });

// james.emit('speak', 'hey, dude');
// mary.emit('speak', 'coffee ')

// // console.log('~~~~~~~~~~~~~~~~~~read and wirte files~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`')


// var fs = require('fs'); 

// var readMe = fs.readFileSync('readMe.txt', 'utf8'); // use the method readFileSync
// //console.log(readMe);
// fs.writeFileSync('write.txt', readMe);

// asynchrnous wirte and read files 

// var fs = require('fs');// module 'fs' to read and wirte files

// fs.unlink('./stuff/writeMe1.txt', function(){ // remove a files before remove a directory
//     fs.rmdir('stuff'); // method 
// })

/*
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err,data){
        fs.writeFile('./stuff/writeMe1.txt', data);
    });
})

Introuction to Express 

var express = require('express'); 
var app = express(); 
*/

// Express Route param

/*
// // create a server by modules
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
}); 

server.listen(3000, '127.0.0.1'); 
console.log('yo, yong, now listen to port 3000');
*/

/* read file and send to clients
// stream and buffer // buffer: the process of temporary storage to transfer data. a small data that comes to buffer called stream
// readable stream 
var http = require('http'); 
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe1.txt');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:'); 
//     myWriteStream.write(chunk);
// })
myReadStream.pipe(myWriteStream);  // same as the previous block code

// return to server, 
// // create a server by modules and send to clients.
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(res)

}); 

server.listen(3000, '127.0.0.1'); 
console.log('yo, yong, now listen to port 3000');

*/

/*
// serving HTML to clients

var http = require('http'); //  uses the HTTP server to process requests and send subsequent responses.
var fs = require('fs');

var server = http.createServer(function(req, res){ //creates the web server object.
    console.log('request was made: '+req.url);
    
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact') {
        res.writeHead(200,{ 'Content-Type':'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }else if(req.url === '/api/ninjas'){
        var yong = [{name: 'yong', age: 27}, {status: 'student at BU', year: 3}];
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end(JSON.stringify(yong));
    }else {
        res.writeHead(404, {'Content-Type': 'application/html'});
        fs.createReadStream(__dirname+ '/404.html').pipe(res);
    }
 
});

server.listen(3000, '127.0.0.1'); //accepts connections on port 300 on URL http://127.0.0.1 (or http://localhost).
console.log('yo, now listening to port 3000');

*/

const express = require('express'); 
const app =  express(); 
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); // middleware, 
// the first folder assets match routs, and 2nd one link up the directory to where it's stored

app.get('/', function(req, res) {
    res.render('index'); // view use render, and just pass review name
});

app.get('/Contact', function(req, res){
    res.render('contact');
});

app.get('/profile/:name', function(req, res){
    var data = {age: 26, job: 'yong', hobbies:['fishing', 'eating','playing']}; //insert more data in view
    res.render('profile',{person: req.params.name, data:data});// the second param just object
   

})


app.listen(3000);