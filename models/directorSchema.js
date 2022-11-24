const mongoose = require('mongoose');

  // const Movie = mongoose.model('Movie', MovieSchema);
  function returnDirectorModel() {
    
    const DirectorSchema = new mongoose.Schema({ // определяем схему
      name: String,
    });
   
    return  mongoose.model('Director', DirectorSchema)
  }
  module.exports = returnDirectorModel();