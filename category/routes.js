const express = require("express");
const routes = express.Router();
const aciton = require("./action");

routes.get("/category/all", aciton.getAllCategories);

module.exports = routes;