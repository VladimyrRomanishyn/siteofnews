//const restful = require('node-restful');
const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const root = process.env.ROOT;


module.exports = (app, route)=>{
     let passwords = mongoose.model('passwords', app.models.auth);
        
    //Setup the controller for REST
    //let rest = restful.model('siteofnews', app.models.index).methods(['get','put','post','delete']);
    //Register this endpoint with the application.
    //rest.register(app, route);
    //Return the middleware.
    app.get(route, (req,res)=>{
        let token = req.session.token;
            if(!token || typeof token === 'undefined'){
                res.redirect('/auth');
        } else {
        
            let verify = jwt.verify(token, process.env.SECRET_KEY);
            passwords.findOne({"Login":`${verify.Login}`},(err, data)=>{
                if(err) res.redirect('/auth');
                res.send(data);
            });
        }
        
    });


}