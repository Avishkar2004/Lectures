const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
async function connectToMongoDb(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectToMongoDb,
};
