const Comment = require('../models/commentsSchema');


const createComment = (movieId, comment) =>{
    return Comment.create({
        movieId: movieId,
        text: comment
    })
}

const getComment = (comment) => {
    return Comment.findById(comment)
}

const updateComment = (commentId, comment) => {
    return Comment.findByIdAndUpdate(commentId, comment)
}

const deleteComment = (comment) => {
    return Comment.findOneAndDelete(comment)
}

module.exports = {createComment, getComment, updateComment, deleteComment};