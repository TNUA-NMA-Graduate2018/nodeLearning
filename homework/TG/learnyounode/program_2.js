var ar = process.argv;
var total = 0;
for(var i=2;i<ar.length;i++){
	total += +ar[i];
}
console.log(total);
