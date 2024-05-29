const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const fzib = require("zlib");
const app = express();
const PORT = 8000;

app.use(status());

//straem read kregi(sample.txt) ==> zipper ==> fs write stream
fs.createReadStream("./sample.txt").pipe(
  fzib.createGzip().pipe(fs.createWriteStream("./sample.zip"))
);

//STREAM READ => 400 mb (read) => 400 zip => 400 mb write
app.get("/", (req, res) => {
  const stream = fs.createReadStream("./sample.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.listen(PORT, () => {
  console.log("Server is up on 8000");
});
