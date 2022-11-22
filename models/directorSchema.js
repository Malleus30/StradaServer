const mongoose = require('mongoose');

  // const Movie = mongoose.model('Movie', MovieSchema);
  function returnDirectorModel() {
    
    const DirectorSchema = new mongoose.Schema({ // определяем схему
      name: String,
      year: Number,
      rating: Number,
    });
   
    return  mongoose.model('Director', DirectorSchema)
  }
  module.exports = returnDirectorModel();