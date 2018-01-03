var fs = require('fs');
var path = require('path')
var loca = process.argv[2];
var ans = process.argv[3];

fs.readdir(loca,function(err,data){
	for(var i=0;i<data.length;i++){
		if(path.extname(data[i]) === '.'+ans){
		console.log(data[i]);
		}
	}
});
