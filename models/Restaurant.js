const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  time: String,
  minsum: String,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  image: String,
  isFeatured: Boolean,
  cartValue: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
