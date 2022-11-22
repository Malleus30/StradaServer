const mongoose = require('mongoose');

  // const Movie = mongoose.model('Movie', MovieSchema);
  function returnModel() {

    const MovieSchema = new mongoose.Schema({ // определяем схему
      title: String,
      year: Number,
      rating: Number,
      categoryField: { type: 'ObjectId', ref:"Category" },
      directorField: {type:'ObjectId', ref:"Director"},
      commentField: {type:'ObjectId', ref:'Comment'},
    });
   
    return  mongoose.model('Movie', MovieSchema)
  }
  module.exports = returnModel();