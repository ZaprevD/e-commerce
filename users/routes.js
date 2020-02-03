const express = require("express");
const router = express.Router();
const action = require("./actioin");
const helper = require("../helper");

router.get("/", action.getAllUsers);
router.post("/register", helper.registerValidation, action.registerUser);
router.post("/login", action.loginUser);

module.exports = router;