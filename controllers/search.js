//const restful = require('node-restful');

module.exports = (app, route)=>{
    
    app.get(route,(req, res)=>{
		res.send('hello world');
	});
}