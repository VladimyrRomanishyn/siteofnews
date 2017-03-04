//dependencies
const express =        require('express');
const path =           require('path');
const bodyParser =     require('body-parser');
const mongoose =       require('mongoose');
const session =        require('express-session');
const MongoStore =     require('connect-mongo')(session);
const methodOverride = require('method-override');
const _ =              require('lodash');
const config =         require('./config')();
const jwt =            require('jsonwebtoken');

//--------------------------------------------------------------------------------
const app = express();

//Add middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
//Session support
app.use(session({
    secret: process.env.SECRET_KEY,
    cookie: {maxAge: 3600}, 
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
//-------------------------------------------------------------------------------
//CORS Support
app.use((req,res,next)=>{
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//Set static folder 
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/client/src')));
//app.use(express.static(path.join(__dirname, '/client/ckeditor')));
//--------------------------------------------------------------------------------
//Connecting to Mongo
app.get('/test',(req,res)=>{
    res.sendFile(`${__dirname}/client/src/ckeditor/samples/index.html`);
});
mongoose.connect(process.env.CONNECTION_DB);
mongoose.connection.once('open' , ()=>{
    mongoose.Promise = global.Promise;
    //Load the Models
    app.models = require('./models');
    //Load the Routes
    const routes = require('./routes');
    
    _.each(routes, (callback, route)=>{
        callback(app, route);
    });
    
    console.log(`Listening on port ${process.env.PORT}`);
    app.listen(process.env.PORT);
   
});