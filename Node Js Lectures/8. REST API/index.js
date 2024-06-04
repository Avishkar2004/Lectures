const fs = require("fs");
const express = require("express");
let users = require("./MOCK_DATA.json"); // Load user data from a JSON file

const app = express();
const PORT = 8000;

// Middleware to parse URL-encoded bodies and JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Endpoint to display a list of users in HTML format
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// Endpoint to get the list of users in JSON format
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Endpoints to get, update, and delete a user by ID
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id); // Get user ID from the request parameters
    const user = users.find((user) => user.id === id); // Find user by ID
    return user
      ? res.json(user)
      : res.status(404).json({ error: "User not found" }); // Return user or 404 error
  })
  //! How to update user data :- => go to postman => patch req on url => localhost:8000/api/users/8 => body => x-www-form-urlencoded => then check middleware => then send (Your users data is updated)
  .patch((req, res) => {
    const id = Number(req.params.id); // Get user ID from the request parameters
    const index = users.findIndex((user) => user.id === id); // Find index of the user by ID

    if (index !== -1) {
      users[index] = { ...users[index], ...req.body }; // Update user data with request body
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Failed to update user" }); // Handle file write error
          }
          return res.json({ status: "Success", user: users[index] }); // Return success status and updated user
        }
      );
    } else {
      return res.status(404).json({ error: "User not found" }); // Handle user not found
    }
  })
//! How to delete => go to postman => delete => localhost:8000/api/users/id (konti pan) => then send
  .delete((req, res) => {
    const id = Number(req.params.id); // Get user ID from the request parameters
    const index = users.findIndex((user) => user.id === id); // Find index of the user by ID

    if (index !== -1) {
      users.splice(index, 1); // Remove user from the array
      fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Failed to delete user" }); // Handle file write error
          }
          return res.json({ status: "Success" }); // Return success status
        }
      );
    } else {
      return res.status(404).json({ error: "User not found" }); // Handle user not found
    }
  });

// Endpoint to add a new user
//! go to postman => post req on (localhost:8000/api/users) => body => x-www-form-urlencoded => fill the info => send
app.post("/api/users", (req, res) => {
  const body = req.body; // Get new user data from the request body
  const newUser = { ...body, id: users.length + 1 }; // Create new user with unique ID
  users.push(newUser); // Add new user to the users array
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add user" }); // Handle file write error
    }
    return res.json({ status: "Success", id: newUser.id }); // Return success status and new user ID
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
