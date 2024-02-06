it is a good practice to start project with index.js
this is a entry point

it is a good practice to have a script

1.
const http = require("http");
const myServer = http.createServer((req, res) => {
    // console.log("New Req Rec")
    console.log(req.headers)
    res.end("Hello from server")
});

//we need port number to listen

myServer.listen(8000, () => {
    console.log("Server Stared")
})


we got this req bcoz of header :-

Server Stared



2.
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  // console.log("New Req Rec")
  const log = `${Date.now()} :${req.url}  New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is a Homepoge");
        break;
      case "/about":
        res.end("Hello i am avishkar");
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



