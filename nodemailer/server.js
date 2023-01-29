const express = require("express");
const app = express();
const http = require("http");
const routes = require("./routes");
const ErrorHandler = require("./utils/errorHandler");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ success: true, message: "Server is working..." });
});

app.use("/api/v1", routes);

app.use((req, res, next) => {
  return next(new ErrorHandler("Resource not found!!", 400));
});

app.use((error, req, res, next) => {
  (error.message = error.message || "Internal Server error"),
    (error.statusCode = error.statusCode || 500);

  return res
    .status(error.statusCode)
    .json({ success: false, message: error.message });
});

server.listen(PORT, () => {
  console.log("Listening on port...");
});
