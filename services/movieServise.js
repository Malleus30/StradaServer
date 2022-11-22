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

module.exports = {createMovie, getMovie, updateMovie, deleteMovie};