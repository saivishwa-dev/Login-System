const express = require('express');
const app = express();
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

app.listen(PORT,(req,res)=>{
    console.log(`Server is started at ${3000} port`);
})