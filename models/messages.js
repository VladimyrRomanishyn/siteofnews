//Dependency injecions

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

//Schema declaration

let MessagesSchema = new Schema({
    
    title: String,
    email: String,
    message: String
    
});
module.exports = MessagesSchema;