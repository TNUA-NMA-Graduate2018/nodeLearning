//due to insufficient time, this exercise is completed with the following references:
//

var http = require('http');
var url = process.argv[2];

http.get(url, function (result){
    result.setEncoding('utf8');
    result.on('error', function (err){
        console.error(err);
    });
    result.on('data', function (chunk){
        console.log(chunk);
    });
});
