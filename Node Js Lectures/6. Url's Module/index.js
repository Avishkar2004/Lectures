const http = require("http");
const fs = require("fs");
const url = require("url"); // have to install this

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} :${req.url}  New Req Received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("This is a Homepoge");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hello ${username}`); //http://localhost:8000/about?myname=%22avi%22
        break;
      case "/search":
        const search = myUrl.query.search_query; //http://localhost:8000/search?search_query=%22tic%20tac%20toe%22
        res.end("Here are your result for " + search);
      default:
        res.end("404 page not found");
    }
  });
});

//we need port number to listen
myServer.listen(8000, () => {
  console.log("Server Stared");
});
