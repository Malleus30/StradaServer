const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

  // const Movie = mongoose.model('Movie', MovieSchema);
  function returnCommentModel() {
    
    const CommentSchema = new mongoose.Schema({ // определяем схему
      time:{type:Date, default: Date.now},
      timeOfUpdate:{type:Date},
      text:String,
      user:String,
      movieId: ObjectId
    });
   
    return  mongoose.model('Comment', CommentSchema)
  }
  module.exports = returnCommentModel();