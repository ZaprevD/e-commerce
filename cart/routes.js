const express = require("express");
const routes = express.Router();
const action = require("./action");

routes.get("/cart/:Id", action.getCartItems);

module.exports  = routes;