'use strict'

const express = require('express');
const router = express.Router();
const Modelos = require('./Modelos');
const string = require('string')

router.get('/productos',  async (req, res, next) => {
    const paginacion= {
        page: req.query.page || 0,
        limit: req.query.limit || 4
    };
    try{
            

        const modelos = await Modelos.find()
            .skip(paginacion.page*paginacion.limit)
            .limit(paginacion.limit)
        
        res.json(modelos);

            
    }catch(err){
        res.json({message: err});
        console.log('error')
    }
    next();
});

router.get('/estado:parametros',  async (req, res, next) => {


    const parametro= req.params.parametros
    console.log(parametro)
    const paginacion= {
        page: req.query.page || 0,
        limit: req.query.limit || 4
    };
    
    try{
            

        const modelos = await Modelos.find({estado: parametro})
            .skip(paginacion.page*paginacion.limit)
            .limit(paginacion.limit)
        
        res.json(modelos);

            
    }catch(err){
        res.json({message: err});
        console.log('err')
    }
    next();
});

router.get('/precio:parametros',  async (req, res, next) => {

    const parametro= parseInt(req.params.parametros)
    console.log(parametro)
    const paginacion= {
        page: req.query.page || 0,
        limit: req.query.limit || 4
    };
    
    try{
            

        const modelos = await Modelos.find({precio: { $gte: parametro}})
            .skip(paginacion.page*paginacion.limit)
            .limit(paginacion.limit)
        
        res.json(modelos);

            
    }catch(err){
        res.json({message: err});
        console.log('err')
    }
    next();
});

router.get('/nombre:parametros',  async (req, res, next) => {

    const parametro= req.params.parametros
    console.log(parametro)
    const paginacion= {
        page: req.query.page || 0,
        limit: req.query.limit || 4
    };
    
    try{
            

        const modelos = await Modelos.find({nombre: parametro})
            .skip(paginacion.page*paginacion.limit)
            .limit(paginacion.limit)
        
        res.json(modelos);

            
    }catch(err){
        res.json({message: err});
        console.log('err')
    }
    next();
});

router.get('/tags:parametros',  async (req, res, next) => {

    const parametro= req.params.parametros
    console.log(parametro)
    const paginacion= {
        page: req.query.page || 0,
        limit: req.query.limit || 4
    };
    
    try{
            

        const modelos = await Modelos.find({tags: parametro})
            .skip(paginacion.page*paginacion.limit)
            .limit(paginacion.limit)
        
        res.json(modelos);

            
    }catch(err){
        res.json({message: err});
        console.log('err')
    }
    next();
});


router.post('/', async (req, res) => { 
    const productos = new Modelos()
    productos.nombre = req.body.nombre,
    productos.estado= req.body.estado,
    productos.precio= req.body.precio,
    productos.foto= req.body.foto,
    productos.tags= req.body.tags
    
    console.log (req.body);
   
    try{
    const prodGuardado= await productos.save();
    res.json(prodGuardado);
    }catch(err){
        res.json({message: err})

    };
});

module.exports = router;