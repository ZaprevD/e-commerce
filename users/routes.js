const express = require("express");
const router = express.Router();
const action = require("./actioin");

router.get("/", action.getAllUsers);
router.post("/register" , action.registerUser);
router.post("/login" , action.loginUser);

module.exports = router;