const cluster = require("cluster");
const os = require("os");
const express = require("express");

const totalCPUs = os.cpus().length;

if (cluster.isMaster) {
  // Master process
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  // Handle events from workers
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // You may choose to fork another worker here.
  });
} else {
}
// Worker process
const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  return res.json({ message: `Hello from Express Server ${process.pid}` });
});
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
