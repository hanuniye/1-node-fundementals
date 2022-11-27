const { readFile } = require("fs");

console.log("first");
readFile("./content/readsync.txt", "utf8", (error, result) => {
  if(error){
    console.log(error);
  }
  console.log(result);
  console.log("second");
})
console.log("third");