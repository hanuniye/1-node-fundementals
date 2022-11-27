// fs(file system) module is one of built-in modules in nodejs
// we use fs-sync 

const { readFileSync, writeFileSync } = require("fs");
console.log(readFileSync('./content/readsync.txt','utf8'));

writeFileSync("./content/result.txt","hello wordl");