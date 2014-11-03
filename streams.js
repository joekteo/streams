var fs = require('fs');
var writeStream = fs.createWriteStream('file.txt');

process.stdin
  .pipe(writeStream);
process.stdin
  .pipe(process.stdout);

console.log('program initiated');