const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
//this is a instance
const PORT = 8000;
const app = express();

//this is a middleware or plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //na hi res ko end kiya
  //na hi next function ko call kiya na
  // send req from postman
  // console.log("Hello From Middleware 1");
  //to send req next  we just call next function
  //Make changes to the request and the response objects.
  // req.myUserName = "Avishkar kakde";
  fs.appendFile(
    "log.txt",
    `\n${Date.now()} :${req.ip} : ${req.method} : ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

// app.use((req, res, next) => {
//Make changes to the request and the response objects.
// console.log("Hello From Middleware 2", req.myUserName);
//   next();
// });

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
app.get("/api/users", (req, res) => {
  // console.log("im in get route", req.myUserName);
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
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
  console.log("Body", body); //this will give undefined bcoz you are not usning urlencded:false (this is middle ware or plugin)
  //send data in file
  //id frontend se nhi atta hai
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, date) => {
    return res.json({ status: "Success", id: users.length });
  });
});

app.listen(PORT, () => {
  console.log("Port is up on 8000");
});
