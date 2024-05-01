const { getUser } = require("../utils/auth.js")

async function restrictToLoggedInUserOnly(req,res,next){
    // get user uid from cookies 
    // const userUid = req.cookies.uid;   //cookie name  = "uid"
     const userUid  = req.cookies.jwt;

    // if user has no uid
    if(!userUid){
        return res.redirect("/user/login")
    }

    // if user has uid(userUid) then get uid using getuid method from util->auth.js
    const user = getUser(userUid); //validate user using jwt

    if(!user){
        return res.redirect("/user/login")
    }

    req.user = user;
    next();   //our request for "/" executed 
}

module.exports  = {restrictToLoggedInUserOnly};