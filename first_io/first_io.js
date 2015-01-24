var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var file_array = buffer.toString().split('\n');

console.log(file_array.length - 1);
