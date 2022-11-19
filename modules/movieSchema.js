const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({ // определяем схему
    title: String,
    year: Number,
    rating: Number,
  });
 
  const Movie = mongoose.model('Movie', MovieSchema);
  module.exports = Movie;