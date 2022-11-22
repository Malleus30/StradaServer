const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

  // const Movie = mongoose.model('Movie', MovieSchema);
  function returnCommentModel() {
    
    const CommentSchema = new mongoose.Schema({ // определяем схему
      year: Number,
      rating: Number,
      text:String,
      movieId: ObjectId,
    });
   
    return  mongoose.model('Comment', CommentSchema)
  }
  module.exports = returnCommentModel();