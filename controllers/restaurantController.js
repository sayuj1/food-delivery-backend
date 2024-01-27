const Restaurant = require('../models/Restaurant');
const Category = require('../models/Category');
const Discount = require('../models/Discount');

exports.fetchRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('categories');
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.fetchDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.addRestaurant = async (req, res) => {
  try {
    const categories = await Category.insertMany(req.body.categories);

    const restaurantDataWithCategories = req.body.restaurants.map((restaurant) => ({
      ...restaurant,
      categories: categories.filter((category) => restaurant.categories.includes(category.title)),
    }));
    const restaurants = await Restaurant.insertMany(restaurantDataWithCategories);

    const discounts = await Discount.insertMany(req.body.discounts);

    res.json({ restaurants, discounts, categories });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

