const mongoosh = require("mongoose");
//Schema (model)
const userSchema = new mongoosh.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//this is a model
const User = mongoosh.model("user", userSchema);

module.exports = User;
