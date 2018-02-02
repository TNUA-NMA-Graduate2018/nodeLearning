//due to insufficient time, this exercise is completed with reference from
//https://github.com/rbrtsmith/learn-you-node-solutions/blob/master/tut06/app.js

var mymodule = require('./module.js');
var dir = process.argv[2];
var filterExtension = process.argv[3];

mymodule(dir, filterExtension, function (err, list){
    if (err) throw err;
    else{
    list.forEach(function (val){
        console.log(val);
    });}
});


