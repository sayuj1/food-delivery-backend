const express = require("express");
const authRoute = express.Router();

const { login, logout, register, updatePassword } = require("../controllers/authController");

authRoute.post("/login", login);
authRoute.get("/logout", logout);
authRoute.post("/register", register);

module.exports = authRoute;
