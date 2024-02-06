const express = require("express");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");

const server = express();

server.use(auth);

// this is inbuild middleware
server.use(bodyParser.json());

server.post("/api/user", (req, res) => {
  console.log(req.body);
  res.send("Req received");
});

server.get("/", (req, res) => {
  res.send("Welcome to express");
});

server.listen(4000, () => {
  console.log("Server is running on 4000");
});
