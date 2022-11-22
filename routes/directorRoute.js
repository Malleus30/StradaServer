const express = require('express');
const router = express.Router();
const directorServise = require('../services/directorService.js');



router.post('/', async(req,res) => {
    try{
        const director = await directorServise
        .addDirector(req.body)
        return res.status(200).send(director)
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})


router.get('/',async (req, res) =>{
    try{
        const director = await directorServise
        .getDirector(req.body)
        // .poulate(['category', 'director'])
        return res.status(200).send(director);
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
})

router.put('/', async (req, res) => {
    try{
        const director = await directorServise
        .updateDirector(req.body[0], req.body[1])
        return res.status(200).send(director);
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
  
})

router.delete('/', async(req, res) => {
    try{
        const director = await directorServise
        .deleteDirector(req.body)
        return res.status(200).send(director);
    }catch(err){
        return res.status(500).json({error:err, code:500})
    }
})

module.exports = router;