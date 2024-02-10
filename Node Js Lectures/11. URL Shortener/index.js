const express = require("express");
const { connectToMongoDb } = require("./connect");
const urlRouter = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8000;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("Mongo DB is Connected");
});

app.use(express.json());

app.use("/url", urlRouter);

app.get("/:shortId", async (req, res) => {
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
