const mongoose = require('mongoose');


  function returnCategoryModel(){
    const CategorySchema = new mongoose.Schema({ // определяем схему
      title: String,
      year: Number,
      rating: Number,
    });
    return mongoose.model('Category', CategorySchema);
  }

  module.exports = returnCategoryModel();