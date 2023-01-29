const userRoutes = require("express").Router();
const { newSeller } = require("./user.controller");

userRoutes.post("/newSeller", newSeller);

module.exports = userRoutes;
