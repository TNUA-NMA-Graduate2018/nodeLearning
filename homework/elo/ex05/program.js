//due to insufficient time, this exercise is completed with reference from
//https://medium.com/coding-and-web-development/learnyounode-exercise-5-ba7e4212bd56

var fs = require('fs');
var path = require('path');

var pathName = process.argv[2];
var extName = '.' + process.argv[3];

fs.readdir(pathName, function callback(err, list){
    for (i = 0; i < list.length; i++){
        if (path.extname(list[i]) === extName)
        {
            console.log(list[i]);
        }
    }
});
