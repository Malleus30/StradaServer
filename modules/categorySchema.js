const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({ // определяем схему
    title: String,
    year: Number,
    rating: Number,
  });
 
  const Category = mongoose.model('Category', CategorySchema);
  module.exports = Category;