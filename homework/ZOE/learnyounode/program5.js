var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var sub = '.' + process.argv[3];

fs.readdir(folder, function callback(err,list){
if(err){
return console.log(err);
}
list.forEach(function callback(file){
if(list
