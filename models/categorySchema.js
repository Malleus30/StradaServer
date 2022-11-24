const mongoose = require('mongoose');


  function returnCategoryModel(){
    const CategorySchema = new mongoose.Schema({ // определяем схему
      title: String,
      moviesField:[{type:'ObjectId', ref:'Movie'}] 
    });
    return mongoose.model('Category', CategorySchema);
  }

  module.exports = returnCategoryModel();