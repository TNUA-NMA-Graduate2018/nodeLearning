//due to insufficient time, this exercise is completed with reference from
//https://medium.com/coding-and-web-development/learnyounode-exercise-4-89a8b2637677

//fs
var fs = require('fs');
var fil = fs.readFile(process.argv[2], 'utf8', function (err, data){
    if (err) throw err;
    console.log(data.split(/\n/).length - 1);
});
