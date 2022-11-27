const http = require("http")

const server = http.createServer((req,res) => {

  switch(req.url){
    case "/":
      for(let i = 0; i < 1000;i++){
        for(let j = 0; j < 1000;j++){
          console.log(j);
        }
      }
      res.end("home page");
    break;
    case "/about":
      res.end("about page");
    break;
    default:
      res.end("error page");
  }
  
})

server.listen(5000, () => {
  console.log("server listening port 5000");
})