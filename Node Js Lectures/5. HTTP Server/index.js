const http = require("http");
const fs = require("fs");


// const myServer = http.createServer((req, res) => {
//   console.log(req)
//   res.end("Hello From Server")
// })

const myServer = http.createServer((req, res) => {
console.log("New Req Rec")
  const log = `${Date.now()} :${req.url}  New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is a Homepoge");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      default:
        res.end("404 page not found");
    }
  });
});

//we need port number to listen
myServer.listen(8000, () => {
  console.log("Server Stared");
});
