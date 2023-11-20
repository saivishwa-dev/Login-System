const express = require('express');
const router = express.Router();




//creating a array 
const credentials = {
    email: "admin@gmail.com",
    password: "admin@123"
}

//post route
router.post("/login",(req,res)=>{
    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        // res.end("login successful")
        res.redirect('/route/dashboard');
    }else{
        res.end("invalid username")
    }
})


//dashboard router 
router.get('/dashboard', (req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('unauthorize user')
    }
})
module.exports = router;