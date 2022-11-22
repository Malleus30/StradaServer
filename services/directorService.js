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

const deleteDirector = (director) => {
    return Director.findOneAndDelete(director)
}

module.exports = {addDirector, getDirector, updateDirector, deleteDirector};