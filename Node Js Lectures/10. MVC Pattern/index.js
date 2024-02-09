const express = require("express");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middleware");

const userRoute = require("./routes/user");

const PORT = 8000;
const app = express();
//connection with mongodb
connectMongoDb("mongodb://127.0.0.1:27017/avi").then(() =>
  console.log("MongoDb is connected")
);

//this is a middleware or plugin
app.use(express.urlencoded({ extended: false }));
//middleware
app.use(logReqRes("log.txt"));

//router
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Port is up on 8000");
});
