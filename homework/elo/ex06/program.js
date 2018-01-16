//due to insufficient time, this exercise is completed with reference from
//

var path = require('path');
var mymodule = require('./module.js');
var dir = process.argv[2];
var filterExtension = process.argv[3];

mymodule(dir, filterExtension, function callback (err, list){
    if (err) throw err;
    list.foreach(function (file){
        console.log(file);
    });
});
