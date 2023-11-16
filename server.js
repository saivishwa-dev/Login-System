const express = require('express');
const app = express();
const path  = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const express_Session = require('express-session');
const Uuid = require("uuid");

const PORT = 3000;

///get route 
app.get("/",(req,res)=>{
    res.render("main", {title : 'Login System'})
})

app.set('view engine', 'ejs')
app.use('/static',express.static(path.join(__dirname,'public'))) //to load the css static files 
app.use('/assets',express.static(path.join(__dirname, 'public/assets'))) //to load the background image statif file 

app.listen(PORT,(req,res)=>{
    console.log(`Server is started at ${3000} port`);
})