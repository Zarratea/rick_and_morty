const express = require("express");
const router = express.Router();
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
let favs = require('../utils/favs.js')


router.get( "/onsearch/:id" , getCharById);

router.get( "/detail/:id" , getCharDetail);

router.post('/fav' , (req , res) =>{
    const {body}=req;
    favs.push(body);
    res.status(201).send('Personaje guardado');
})

router.get('/fav' , (req , res) =>{
    res.status(201).json(favs);
})

router.delete('/fav/:id' , (req , res )=>{
    const {id}=req.params
    favs=favs.filter((fav)=>fav.id!=id)
    res.status(201).json({status:'ok'});
})
module.exports= router;
