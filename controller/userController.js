const mongoose = require("mongoose");
const userModel = require("../models/user");
const {v4:uuidv4} = require("uuid");
const { setUser } = require("../utils/auth")

async function handleUserSignUp(req,res){
    const newUser = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    const createdUser = await userModel.create(newUser);
   
    res.json({
        status:200,
        success:true,
        message:"user registered sucessfully",
        createdUser
    })
}
async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({email,password})
   
    if(!user){
        return  res.render("login")
    }

    /*  create cookie for sessions statefull authentication
        // session id using uuidv4
        const sessionId = uuidv4();
        setUser(sessionId,user);  //now in auth.js we mapped this session id with the user using Maps
        // now create a cookie
        res.cookie("uid",sessionId);
    */

    //  create cookie for jwt stateless authentication
    const token = setUser(user);   //setuser function in auth.js return jet token

    res.cookie("jwt",token);
    res.render("home")
}


module.exports = {handleUserSignUp,handleUserLogin};
