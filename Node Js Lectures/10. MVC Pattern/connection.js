const mongoosh = require("mongoose");
mongoosh.set("strictQuery", true)
//connection with mongodb
async function connectMongoDb(url) {
  return mongoosh.connect(url);
}

module.exports = {
  connectMongoDb,
};
