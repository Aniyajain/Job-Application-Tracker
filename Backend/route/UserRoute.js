const express = require("express");
const router = express.Router();
const {createUser , LoginUser} = require("../controller/userController");


router.post("/createUser", createUser);
router.post("/LoginUser", LoginUser);

module.exports = router;
