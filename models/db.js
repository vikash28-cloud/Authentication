
const mongoose = require("mongoose");

const conn = mongoose.connect('mongodb+srv://vikash:vikash@cluster0.zlvg4bo.mongodb.net/auth')
.then(()=>{
    console.log("connected to mongodb cluster")
}).catch((err)=>{
    console.log("error=  ",err);
})

module.exports  = conn;
