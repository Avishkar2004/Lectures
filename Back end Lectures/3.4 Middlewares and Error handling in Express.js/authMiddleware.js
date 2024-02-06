module.exports = (req, res) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
  } else {
    res.end("Unauthorized");
  }
  console.log(authHeader);
};
