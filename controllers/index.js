const restful = require('node-restful');

module.exports = (app, route)=>{
    
    //Setup the controller for REST
    let rest = restful.model('articles', app.models.index).methods(['get','post']);
    //Register this endpoint with the application.
    rest.register(app, route);
    //Return the middleware.
    return (req, res, next)=>{ next();}
}