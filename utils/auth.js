
/* using sessions statefull authentication
const sesssionIdToUserMap = new Map();

function setUser(id,user){
    sesssionIdToUserMap.set(id,user);
}

function getUser(id){
    return sesssionIdToUserMap.get(id);
}

*/



// using jwt stateless authentictaion
const jwt = require("jsonwebtoken");
const SECRET_KEY = "vikashsecretrkey";

function setUser(user){
    const payload = {
        user
    }
    return jwt.sign(payload,SECRET_KEY);    //user object contains login info , it is a payload
}

function getUser(token){
    try {
        if(!token) return null;
        return jwt.verify(token,SECRET_KEY)
        
    } catch (error) {
        console.log("error occured")
    }
   
}


module.exports = {
    setUser,
    getUser
}