// fs-async 

const { readFile, writeFile } = require("fs");

readFile("./content/readsync.txt", "utf8", (err, result) => {
  if(err){
    console.log(err);
  }

  const first = result;
  writeFile("./content/resultAsync.txt", first, (err, result) => {
    if(err){
      console.log(err);
    }

  });
})