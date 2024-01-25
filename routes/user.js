const express = require("express");
const userRoute = express.Router();

const {
  viewUserDetails,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authProtect");

userRoute.get("/viewUserDetails", protect, viewUserDetails);


module.exports = userRoute;
