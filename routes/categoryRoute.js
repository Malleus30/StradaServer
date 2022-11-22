const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService');

router.post('/', async(req,res) => {
    try{
        const category = await categoryService
        .createCategory(req.body)
        return res.status(200).send(category)
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})

router.get('/', async(req, res) => {
    try{
        const category = await categoryService
        .getCategory(req.body)
        return res.status(200).send(category)
    }catch(err){
        res.status(500).json({error:err, code:500})
    }
})

router.put('/', async (req,res) => {
   try{
    const category = await categoryService
    .updateCategory(req.body[0], req.body[1])
    return res.status(200).send(category)
   }catch(err){
    res.status(500).json({error:err, code: 500})
   }
})

router.delete('/', async (req, res) => {
    try{
        const catrgory  = await categoryService
        .deleteCategory(req.body)
        return res.status(200).send(catrgory)
    }catch(err){
        res.status(500).json({error:err, code: 500})
    }
})

module.exports = router;