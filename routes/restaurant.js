const express = require("express");
const restaurantRoute = express.Router();

const { fetchRestaurants, addRestaurant, fetchDiscounts, fetchCategories } = require("../controllers/restaurantController");

restaurantRoute.get("/view", fetchRestaurants);
restaurantRoute.post("/add", addRestaurant);
restaurantRoute.get("/viewDiscounts", fetchDiscounts);
restaurantRoute.get("/viewCategories", fetchCategories);


module.exports = restaurantRoute;
