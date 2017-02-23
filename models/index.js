//Dependency injecions

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema declaration

let articleSchema = new Schema({
    
    title: String,
    shortContent: String,
    content: String,
    contentEn: String,
    imagesRef:String,
    refToOriginResourse: String
    
});

module.exports = articleSchema;