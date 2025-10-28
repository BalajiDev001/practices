// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require('fs');

// Write to a file
fs.writeFileSync('hello.txt', 'Hello, Node.js!');

// Read from a file
// const content = fs.readFileSync('hello.txt', 'utf8');
// console.log(content);

var data=fs.readFileSync('hello.txt','utf-8')
console.log(data)