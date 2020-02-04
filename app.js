const express = require("express");
require("dotenv").config();
const middlewares = require("./middlewares/common");
const allRoutes = require("./router");
const jwt = require("express-jwt");
const bodyParser = require("body-parser");
const app = express();

const publicPaths = ["/login", "/register", "/products/all" , "/category/all", "/favicon.ico"];
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(middlewares.logger);
app.use(jwt({ secret: process.env.SECRET }).unless({ path: publicPaths }))
app.use(allRoutes);
app.use(middlewares.wrongRouteHandler);
app.use(middlewares.errorHandler);

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening to port : ${port}`)
})