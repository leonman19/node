'use strict'
const mongoose= require('mongoose');
const mongoPaginate= require('mongoose-paginate');


const ProductSchema = mongoose.Schema({
    nombre: {type: String},
    estado: {type: String, enum: ['Se busca', 'Se vende']},
    precio: {type: Number, default: 0},
    foto: String,
    tags:  { type: String, enum: ['work', 'lifestyle', 'motor', 'mobile']}
});

ProductSchema.plugin (mongoPaginate);
module.exports= mongoose.model('modelos', ProductSchema);
