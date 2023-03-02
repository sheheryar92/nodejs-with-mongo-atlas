
const express = require('express')
const mongoose = require('mongoose');


const postSchema =  mongoose.Schema({
    name: String,
    email: String
});


const dataModel = mongoose.model('name and email collection', postSchema)



module.exports = dataModel;