const express = require("express");
const fs = require("fs");
const mongoosh = require("mongoose");
//this is a instance
const PORT = 8000;
const app = express();

//connection with mongodb
mongoosh
  .connect("mongodb://127.0.0.1:27017/avi")
  .then(() => {
    console.log("Mongo Db Connected");
  })
  .catch((err) => console.log("Mongo Error", err));

//Schema
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

//this is a middleware or plugin
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  return res.send("Hello");
});
app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
      <ul>
      ${allDbUsers
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")}</ul>
      `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.idk);
    //404 user not found if no user in databasek
    if (!user) return res.status(404).json({ msg: "User not foundk" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    //Edit user with id
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    //delete user with id
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

//making a post req from postman on this
// 1.open postman
// 2.make post  req on :- http://localhost:8000/api/users
// 3.select x-www-form-urlencoded
app.post("/api/users", async (req, res) => {
  //jo bhi hum front end se send karte hai na vo is body main available hota hai
  const body = req.body;
  //if user dont send email or something then we have to return bad req
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Field Are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  return res.status(201).json({ msg: "Succes" });
});

app.listen(PORT, () => {
  console.log("Port is up on 8000");
});
