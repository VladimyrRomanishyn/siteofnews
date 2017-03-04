//Dependency injecions

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema declaration

let article_rusSchema = new Schema({
    
    title: String,
    shortContent: String,
    content: String,
    //contentEn: String,
    //imagesRef:String,
    //refToOriginResourse: String
    
});

module.exports = article_rusSchema;