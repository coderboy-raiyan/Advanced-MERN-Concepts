const userRoutes = require("express").Router();
const { newSeller } = require("./user.controller");

userRoutes.get("/newSeller", newSeller);

module.exports = userRoutes;
