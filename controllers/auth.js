//const restful = require('node-restful');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const root = process.env.ROOT;


module.exports = (app, route)=>{
    let passwords = mongoose.model('passwords', app.models.auth);
	
     app.get(route,(req, res, next)=>{
        let path = __dirname.split('/').slice(0,3).join('/')+'/views/auth.html';
        res.sendFile(path);
		
    });
	    app.post(route, (req,res)=>{    
        if(req.session.token) {
            console.log(req.session.token);
        }
        let login = req.body.login;
        let password = req.body.password;
        
       
        passwords.findOne({"Login":`${login}`},(err,data)=>{
            if(err){
                res.send("Such user don't exist");
            };
            if(data != null && password === data.Password){ 
                
              
                
                
                let token = jwt.sign({ Login: data.Login }, 
                                     process.env.SECRET_KEY,
                                     { expiresIn: '1h' }
                                    );
                req.session.token = token;
                res.sendFile(`${root}/views/mpanel.html`);
                
                
            } else {
                res.send('Error');
            }       
        });
    });
}