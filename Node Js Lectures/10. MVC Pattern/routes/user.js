const express = require("express");
const {
  handleGetAllUser,
  handlegetUserById,
  handleUpdateById,
  handleDeleteUserById,
  handleCreatenewUser,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(handleGetAllUser).post(handleCreatenewUser);

router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdateById)
  .delete(handleDeleteUserById);

module.exports = router;
