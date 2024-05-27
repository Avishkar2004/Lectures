//! See The task in notes.md
const fs = require("fs");
const express = require("express");
const users = require("./MOCK_DATA.json");
const { error } = require("console");

const app = express();
const PORT = 8000;

// Plugin / urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
 </ul>
  `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.send(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      users[index] = { ...users[index], ...req.body };
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Failed to update user" });
          }
          return res.json({ status: "Success", user: users[index] });
        }
      );
    } else {
      return res.status(404).json({ error: "User Not Found" });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      users.splice(index, 1);
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Failed to delete user" });
          }
          return res.json({ status: "Success" });
        }
      );
    } else {
      return res.status(404).json({ error: "User Not Found" });
    }
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, res) => {
    return res.json({ Status: "Pending" });
  });
  console.log(body);
  return res.json({ status: "Success", id: users.length });
});

app.listen(PORT, () => {
  console.log("Server is running on 8000");
});
