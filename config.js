const crypto = require("crypto");
module.exports = ()=>{
//    process.env.SECRET_KEY = crypto.randomBytes(32).toString('hex'),
    process.env.SECRET_KEY = 'qwewefweg123dfg4g45g8gfskrtg',
    process.env.CONNECTION_DB ='mongodb://localhost:27017/siteofnews',
    process.env.PORT =80 ;
}//