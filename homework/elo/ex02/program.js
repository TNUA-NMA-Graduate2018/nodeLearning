var i = 0;

for (var a = 2; a < process.argv.length; a++){
    i += Number(process.argv[a]);
}
console.log(i);
