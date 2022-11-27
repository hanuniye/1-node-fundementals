const http = require("http");

const server = http.createServer((req,res) => {
  if(req.url === "/"){
    res.end("welcome to home page");
  }

  if(req.url === "/about"){
    res.end("welcome to about page");
  }

  res.end(`
    <h2>ooops!</h2>
    <p>sorry we have not what u looking for</p>
    <a href="/">back to home</a>
  `)
})

server.listen(5000);