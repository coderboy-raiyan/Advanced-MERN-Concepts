const fs = require("fs");
const http = require("http");
const path = require("path");
const generateBulkText = require("./utils/generateBulkText");

const server = http.createServer();

server.on("request", (req, res) => {
  // Solution - 1 takes longer time and Inefficient
  fs.readFile(path.join(__dirname, "test.txt"), (err, data) => {
    res.end(data);
  });
  /* ----------------------- */
  // Solution - 2 takes smaller time and efficient btw it has a backpressure
  const readTextFile1 = fs.createReadStream(path.join(__dirname, "test.txt"));
  readTextFile1.on("data", (chunk) => {
    res.write(chunk);
  });
  readTextFile2.on("end", () => {
    res.end();
  });
  /* ---------------------------- */
  //   Solution - 3 more efficient it solved the backpressure problem
  const readTextFile2 = fs.createReadStream(path.join(__dirname, "test.txt"));
  readTextFile2.pipe(res);
});

server.listen(5000, () => {
  console.log("Listening....");
});
