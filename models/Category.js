const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: String,
  image: String,
  selected: Boolean,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
