const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

///get route 
app.get("/",(req,res)=>{
    res.render("main", {title : 'Login System'})
})

app.set('view engine', 'ejs')

app.listen(PORT,(req,res)=>{
    console.log(`Server is started at ${3000} port`);
})