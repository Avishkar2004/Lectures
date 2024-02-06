const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
//this is a instance
const PORT = 8000;
const app = express();

//this is a middleware or plugin
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  return res.send("Hello");
});
app.get("/users", (req, res) => {
  const html = `
      <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>
      `;
  res.send(html);
});

//get all users data
//making header
app.get("/api/users", (req, res) => {
  //custom header
  //always add X to custom header
  res.setHeader("X-myName", "Avishkar Kakde"); // got this in postman header
  console.log(req.headers); //got header in terminal
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    //404 user not found if no user in databasek
    if (!user) return res.status(404).json({ msg: "User not foundk" });
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    //delete user with id
    return res.json({ status: "Pending" });
  });

//making a post req from postman on this
// 1.open postman
// 2.make post  req on :- http://localhost:8000/api/users
// 3.select x-www-form-urlencoded
app.post("/api/users", (req, res) => {
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

  console.log("Body", body); //this will give undefined bcoz you are not usning urlencded:false (this is middle ware or plugin)
  //send data in file
  //id frontend se nhi atta hai
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, date) => {
    //sending 201 response bcoz The request succeeded, and a new resource was created as a result.
    return res.status(201).json({ status: "Success", id: users.length });
  });
});

app.listen(PORT, () => {
  console.log("Port is up on 8000");
});
