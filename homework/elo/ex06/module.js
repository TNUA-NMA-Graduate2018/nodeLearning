//due to insufficient time, this exercise is completed with the following reference
//stackoverflow.com/questions/35542194/learnyounode-6-make-it-modular-correct-results-and-throwing-error-at-the-same
//https://github.com/rbrtsmith/learn-you-node-solutions/blob/master/tut06/filter.js

var fs = require('fs');
var path = require('path');

var listFiles = function (dir, ext, callback){
    fs.readdir(dir, function (err, list){
        var result = [];
        if (err){
            return callback(err);
        }else{
            return(callback(null, list.filter(function (val){
                if (path.extname(val) === '.' + ext){
                    return val;
                }
            })));
        }
    });
}

module.exports = listFiles;
