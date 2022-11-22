const express = require('express');
const router = express.Router();
const commentService = require('../services/commentService.js');
const movieServise = require('./movieRoute.js');

router.post('/', async(req,res) => {
    try{
        
        const comment = await commentService
        .createComment(req.body._id, req.body.text)
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
    .updateComment(req.body[0], req.body[1])
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