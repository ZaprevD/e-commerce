const express = require("express");
const routes = express.Router();
const action = require("./action");

routes.get("/cart/:Id", action.getCartItems);
routes.post("/cart/:Id/additem/:productId", action.addItemToCart);
routes.delete("/cart/delete/:Id", action.removeItemFromCart)

module.exports  = routes;