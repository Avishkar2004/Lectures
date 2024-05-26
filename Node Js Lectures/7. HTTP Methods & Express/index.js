const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.end("Hello this is a home page");
});

app.get("/about", (req, res) => {
  // return res.send("Hello this is a about page" + " Hey " + req.query.name + " you are " + req.query.age);
  return res.send(`Hey ${req.query.name} your are ${req.query.age} year old`);
  //http://localhost:8000/about?name=%22Avi%22&age=19
  //Hey Avi your are 19 year old
});

app.listen(8000, () => {
  console.log("Server Started at 8000");
});
