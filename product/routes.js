const express = require("express");
const routes = express.Router();
const action = require("./action");
const helper = require("../helper");

routes.get("/products/all", action.getAllProducts);
routes.post("/products/new", helper.isAdmin, helper.validateProduct, action.addProduct);

module.exports = routes;