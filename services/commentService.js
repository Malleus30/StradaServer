const Comment = require('../models/commentsSchema');


const createComment = (comment) =>{
    return Comment.create(comment);
}

// const getComment = (comment) => {
//     return Comment.findById(comment)
// }


const updateComment = (commentId, {text, user, movieId}) => {
    return Comment.findByIdAndUpdate(commentId, {text, user, movieId, timeOfUpdate: Date.now()})
}

const deleteComment = (comment) => {
    return Comment.findOneAndDelete(comment)
}

module.exports = {createComment, /*getComment, */ updateComment, deleteComment};