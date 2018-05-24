var counter = function(arr){
    return 'there is ' + arr.length + ' elements in this array'  ;
}

var adder= function(a,b){
    return `the sum of two number is ${a + b}`
};

let pi  = 3.42;

module.exports = {
counter: counter, 
adder: adder, 
pi: pi
}