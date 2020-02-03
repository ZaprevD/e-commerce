const express = require("express");
const routes = express.Router();
const action = require("./action");

routes.get("/products/all", action.getAllProducts);
routes.post("/products/new" , action.addProduct);

module.exports = routes;