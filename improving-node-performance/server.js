const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.status(200).json({ message: `Performance example ${process.pid}` });
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.status(200).json({ message: `Ding ding ding! : ${process.pid}` });
});

if (cluster.isMaster) {
  console.log("Master has been started");
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Workers has been started");
  app.listen(3000);
}
