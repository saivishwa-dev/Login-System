const express = require('express');
const app = express();
const path  = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');
const router = require('./router');


const PORT = 3000;

//to use bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


///get route 
app.get("/",(req,res)=>{
    res.render("main", {title : 'Login System'})
})

//load ejs files
app.set('view engine', 'ejs')

//load static files
app.use('/static',express.static(path.join(__dirname,'public'))) //to load the css static files 
app.use('/assets',express.static(path.join(__dirname, 'public/assets'))) //to load the background image statif file 


//to load the session and use UUID 
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use('/router',router);


//to make the port at 3000
app.listen(PORT,(req,res)=>{
    console.log(`Server is started at ${PORT} port`);
})