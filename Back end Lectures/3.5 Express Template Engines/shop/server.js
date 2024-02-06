const express = require("express");
const app = express();

app.set("view engine", "ejs");

//website should be open this is what we need route
app.get("/", function (req, res) {
  res.render("pages/index");
});

app.listen(5000);
console.log("Server is running on port 5000");
