var fs = require('fs')
var Link = process.argv[2];

buf = fs.readFileSync(Link);
var str = buf.toString();

var array = str.split('\n');
console.log(array.length-1);
