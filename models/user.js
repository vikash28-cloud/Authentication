const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        
        type:String
    },
    email:{
       
        type:String
    },
    password:{
       
        type:String
    }
},{timestamps:true})  //created at and updated at property show in document 

module.exports = new mongoose.model("user",userSchema)