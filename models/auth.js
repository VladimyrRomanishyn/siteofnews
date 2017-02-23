//Dependency injecions

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

//Schema declaration

let passwordSchema = new Schema({
    
    Login: String,
    Password: String
    
});
module.exports = passwordSchema;