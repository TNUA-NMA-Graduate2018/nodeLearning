var fs = require('fs');  
var a = process.argv[2];

fs.readFile(process.argv[2],function (err,data){
	if(err)throw err;
	var buf = data.toString().split('\n').length-1;
	console.log(buf);
});

