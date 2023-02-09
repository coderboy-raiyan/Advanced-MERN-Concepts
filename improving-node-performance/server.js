const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.status(200).json({ message: `Performance examples ${process.pid}` });
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.status(200).json({ message: `Beep ding ding! : ${process.pid}` });
});

console.log("Master has been started");

console.log("Workers has been started");
app.listen(3000);
