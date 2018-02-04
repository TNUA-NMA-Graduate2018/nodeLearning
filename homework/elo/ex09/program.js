//due to insufficient time, this exercise is completed with help from the following references
//https://github.com/nodeschool/discussions/issues/440

var http = require('http');
var bl = require('bl');

var url = process.argv[2];
var result = [];
var count = 0;

function printRes{
    for (var a = 0; a < 3; a++){
        console.log(result[i]);
    }
}

function httpG(dex) {
    http.get(process.argv[2 + dex], function (res){
        response.pipe(bl(function (err, data){
            if (err)
                return console.error(err);
        }));
    });
}
