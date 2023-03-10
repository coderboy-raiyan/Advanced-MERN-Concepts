const express = require("express");
const app = require("express")();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Working properly" });
});

module.exports = app;
