//Due to insufficient amount of time, this exercise is completed with reference from
//https://stackoverflow.com/questions/18679576/counting-words-in-string

var fs = require('fs');
var pth = process.argv[2];

var buf = fs.readFileSync(String(pth));
var str = buf.toString();

console.log(str.split(/\n/).length - 1);
