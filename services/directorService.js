const Director = require('../models/directorSchema.js');

const addDirector = (director) =>{
    return Director.create(director);
}

const getDirector = (director) => {
    return Director.findById(director)
}

const updateDirector = (directorId, director) => {
    return Director.findByIdAndUpdate(directorId, director)
}

const addDirectorMovie = (directorId, movieId) => {
    console.log(movieId)
    return Director.findByIdAndUpdate(directorId, {$push : {movieField : movieId}})
}

const deleteDirector = (director) => {
    return Director.findOneAndDelete(director)
}

module.exports = {addDirector, getDirector, updateDirector, deleteDirector, addDirectorMovie};