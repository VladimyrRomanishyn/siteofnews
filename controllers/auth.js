const restful = require('node-restful');


module.exports = (app, route)=>{
    
    return app.get(route,(req, res, next)=>{
        let path = __dirname.split('/').slice(0,3).join('/')+'/views/auth.html';
        res.sendFile(path);
    })
}