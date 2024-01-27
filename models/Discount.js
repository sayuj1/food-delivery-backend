const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  percentage: String,
  image: String,
  bg: String,
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
