const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute.js");
const conn = require('./models/db.js');
const path = require("path");
const ejs = require("ejs")
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUserOnly } = require("./middleware/authMiddleware.js")


//middlewares
app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// user routes
app.use("/user",userRoute);


// -------------static routes---------------//
// signup
app.get("/user/signup",(req,res)=>{
    res.render("signup")
})
// login
app.get("/user/login",(req,res)=>{
    res.render("login")
})
app.get("/",  restrictToLoggedInUserOnly , (req,res)=>{
    res.render("home");
})




app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})

