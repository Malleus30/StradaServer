const Movie = require('../models/movieSchema.js');

const createMovie = (movie) =>{
    return Movie.create(movie);
}

const getMovie = (movie) => {
    return Movie.findById(movie).lean();
}

const updateMovie = (movieId, movie) => {
    return Movie.findByIdAndUpdate(movieId, movie)
}

const deleteMovie = (movie) => {
    return Movie.findOneAndDelete(movie)
}


const addMovieComment = (movieId, commentId) =>{
    console.log(movieId)
    return Movie.findByIdAndUpdate(movieId,  { $push: { commentField: commentId } })
}

const gettAllMoviesByDirector = (directorId) =>{
    return Movie.find({directorField:directorId})
}

const getAllMoviesByCategory = (categoryId) => {
    return Movie.find({categoryField:categoryId})
}

module.exports = {createMovie, getMovie, updateMovie, deleteMovie, addMovieComment, getAllMoviesByCategory, gettAllMoviesByDirector};