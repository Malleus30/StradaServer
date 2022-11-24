const express = require('express');
const router = express.Router();
const movieServise = require('../services/movieServise.js');
const directorService = require('../services/directorService.js');



router.post('/', async(req,res) => {
    try{
        const movie = await movieServise
        .createMovie(req.body)
        return res.status(200).send(movie)
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})


router.get('/',async (req, res) =>{
   
    try{ 
        console.log(req.body.findAllByCategory);
        if (req.body.findAllByCategory){
            const movies = await movieServise
            .getAllMoviesByCategory(req.body.categoryId)
        return res.status(200).send(movies);

        }else if(req.body.findAllByDirector){
            const movies = await movieServise
            .gettAllMoviesByDirector(req.body.directorId)
            return res.status(200).send(movies);
            
        } else{
            const movie = await movieServise
            .getMovie(req.body)
            .populate('categoryField')
            .populate('directorField')
            .populate('commentField')
            return res.status(200).send(movie);
        }
       
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
})

router.put('/', async (req, res) => {
    try{
        const movie = await movieServise 
        .updateMovie(req.body[0], req.body[1])
        return res.status(200).send(movie);
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
  
})

router.delete('/', async(req, res) => {
    try{
        const movie = await movieServise 
        .deleteMovie(req.body)
        return res.status(200).send(movie);
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
})

module.exports = router;
