const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {
  const text = fs.createReadStream("./content/bigfile.txt","utf8");
  text.on("open", () => {
    // text.pipe() pipe wa method xogta ka timi createReadStream toos ugu badala CreateWriteStream 
    // text.pipe() waxaa gudaheda la pass garreya res 
    text.pipe(res)
  })

  text.on("error", (err) => console.log(err))
})

server.listen(5000)

