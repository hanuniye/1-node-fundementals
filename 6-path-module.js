// path module is one of built-in modules in nodejs

const path = require("path");

// separater of the path 
console.log(path.sep);

const filepath = path.join("content","speed")

// basename waxu so celiyaa joinka fileka ama folderka u danbeya 
// console.log(path.basename(filepath));

console.log(path.resolve(__dirname,"content","subfolder","test.txt"));
