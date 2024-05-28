const express = require("express");
const mysql = require("mysql2/promise");
//this is a instance
const PORT = 8000;
const app = express();
//! We are using avi database from mysql
// MySQL connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "avi",
});

//this is a middleware or plugin
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  return res.send("Hello This is a Home Page");
});

app.get("/users", async (req, res) => {
  //! GET :- http://localhost:8000/users
  const [allDbUsers] = await db.execute("SELECT * FROM users");
  const html = `
      <ul>
      ${allDbUsers
        .map(
          (user) =>
            `<li>${user.first_name} - ${user.email} - ${user.created_at}</li>`
        )
        .join("")}</ul>
      `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  //! GET http://localhost:8000/api/users
  const [allDbUsers] = await db.execute("SELECT * FROM users");
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  //! http://localhost:8000/api/users/ID
  .get(async (req, res) => {
    const [users] = await db.execute("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    const user = users[0];
    //404 user not found if no user in database
    if (!user) return res.status(404).json({ msg: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    //Edit user with id and this will change the our last_name into Changed
    //! PATCH :- http://localhost:8000/api/users/8
    await db.execute("UPDATE users SET last_name = ? WHERE id = ?", [
      "Changed",
      req.params.id,
    ]);
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    //delete user with id
    await db.execute("DELETE FROM users WHERE id = ?", [req.params.id]);
    return res.json({ status: "Success" });
  });

// Making a post req from postman on this
// 1.open postman
//! 2.make POST req on :- http://localhost:8000/api/users
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
  const [result] = await db.execute(
    "INSERT INTO users (first_name, last_name, email, gender, job_title) VALUES (?, ?, ?, ?, ?)",
    [body.first_name, body.last_name, body.email, body.gender, body.job_title]
  );
  console.log("Result :-", result);
  return res.status(201).json({ msg: "Success" });
});

app.listen(PORT, () => {
  console.log("Port is up on 8000");
});
