const express = require('express');
const router = express.Router();
const commentService = require('../services/commentService.js');
const movieServise = require('../services/movieServise.js');

router.post('/', async(req,res) => {
    try{
        
        // const movie = await getMovie(req.body.movie);
        const movie = await movieServise.getMovie(req.body.movieId);
      
        if (!movie) {
          return res.status(404).send('movie not found');
        }
        
        const comment = await commentService.createComment(/*req.body._id, */ req.body);
        console.log(comment);
        const newCom = await movieServise.addMovieComment(movie._id, comment._id);
       
        return res.status(200).send(comment )
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})

router.get('/', async(req, res) => {
    try{
        const comment  = await commentService
        .getComment(req.body)
        return res.status(200).send(comment )
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})

router.put('/', async (req,res) => {
   try{
    const comment  = await commentService
    .updateComment(req.body.commentId, req.body)
    return res.status(200).send(comment)
   }catch(err){
    res.status(500).json({error:err, code: 500})
   }
})

router.delete('/', async (req, res) => {
    try{
        const comment  = await commentService
        .deleteComment(req.body)
        return res.status(200).send(comment)
    }catch(err){
        res.status(500).json({error:err, code: 500})
    }
})

module.exports = router;