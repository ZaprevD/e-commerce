const express = require("express");
const router = express.Router();
const productRoutes = require("./product/routes");
const userRoutes = require("./users/routes");
const categoryRoutes = require("./category/routes");

router.use(userRoutes);
router.use(productRoutes);
router.use(categoryRoutes);

module.exports = router;