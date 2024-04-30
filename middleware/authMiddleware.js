const { getUser } = require("../utils/auth.js")

async function restrictToLoggedInUserOnly(req,res,next){
    // get user uid from cookies 
    const userUid = req.cookies.uid;   //cookie name  = "uid"

    // if user has no uid
    if(!userUid){
        return res.redirect("/user/login")
    }

    // if user has uid(userUid) then get uid using getuid method from util->auth.js
    const user = getUser(userUid);

    if(!user){
        return res.redirect("/user/login")
    }

    req.user = user;
    next();
}

module.exports  = {restrictToLoggedInUserOnly};