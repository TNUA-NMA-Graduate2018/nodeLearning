//due to insufficient time, this exercise is completed with the following references
//http://joecreager.com/learnyounode-lesson-8-http-collect/

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response){
    response.pipe(bl(function (err, data){
        if (err){
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
