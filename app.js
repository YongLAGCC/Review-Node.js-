// function express

function callFunction(fun){
    fun(); 
}
var sayBye = function(){
    console.log('bye');
};
callFunction(sayBye);

//module
module.exports = counter; 

const count = require('./count');
console.log(count.counter(['1','2']));
console.log(count.adder(3,5));
console.log(count.pi);

// events

var events = require('events');

var myEmitter = new events.EventEmitter(); 

myEmitter.on('someEvent', function(mssg){
    console.log(mssg); 
});

myEmitter.emit('someEvent', 'the event was emitted');


// console.log('~~~~~~~util module(inherite)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`')


var events = require('events');
var util = require('util'); 

var Person = function(name){
    this.name = name; 
}

util.inherits(Person, events.EventEmitter); 

var james = new Person('james'); 
var mary = new Person('mary'); 
var ryu = new Person('ryu'); 
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + 'said: ' + mssg); 
    });
});

james.emit('speak', 'hey, dude');
mary.emit('speak', 'coffee ')

// console.log('~~~~~~~~~~~~~~~~~~read and wirte files~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`')


var fs = require('fs'); 

var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);
fs.writeFileSync('write.txt', readMe);

// asynchrnous wirte and read

var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err,data){
    fs.writeFile('writeMe.txt', data);
});