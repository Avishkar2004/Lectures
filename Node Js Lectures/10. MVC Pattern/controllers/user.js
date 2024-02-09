const User = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDbUsers = await User.find({});

  return res.json(allDbUsers);
}

async function handlegetUserById(req, res) {
  const user = await User.findById(req.params.id);
  //404 user not found if no user in databasek
  if (!user) return res.status(404).json({ msg: "User not found" });
  return res.json(user);
}

async function handleUpdateById(req, res) {
  //Edit user with id
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  //delete user with id
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreatenewUser(req, res) {
  const body = req.body;
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
  return res.status(201).json({ msg: "Succes", id: result._id });
}
module.exports = {
  handleGetAllUser,
  handlegetUserById,
  handleUpdateById,
  handleDeleteUserById,
  handleCreatenewUser,
};
