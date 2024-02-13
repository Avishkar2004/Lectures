const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDb } = require("./connect");
const urlRouter = require("./routes/url");
const URL = require("./models/url");
const staticRouter = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("Mongo DB is Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//inline middleware
app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/user", userRoute);

app.use("/", checkAuth, staticRouter);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Port is Up On ${PORT}`);
});
