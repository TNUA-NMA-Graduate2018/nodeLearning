//due to insufficient time, this exercise is completed with reference from
//stackoverflow.com/questions/35542194/learnyounode-6-make-it-modular-correct-results-and-throwing-error-at-the-same

fs = require('fs');
path = require('path');

module.exports = function (dir, filter, callback){
    fs.readdir(dir, function (err, list){
        if (err) throw err;
        else{
            list.filter(function (file){
                if (path.extname(file) === '.' + filter) return true;
            })
            return callback(null, list);
        }
    });
}
