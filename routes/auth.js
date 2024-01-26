const express = require("express");
const authRoute = express.Router();

const { login, logout, register } = require("../controllers/authController");
const { validateAuthInputFields } = require("../middlewares/validator");

authRoute.post("/login", validateAuthInputFields, login);
authRoute.get("/logout", logout);
authRoute.post("/register", validateAuthInputFields, register);

module.exports = authRoute;
