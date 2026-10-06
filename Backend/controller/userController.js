const user = require("../model/userSchema");

const createUser = async(req, res)=>{
    try {
        console.log(req.body);
        
        const User = await user.create({Email : req.body.Email, Password : req.body.Password});
        res.status(201).json({msg: "User Created", user});
        
    } catch (error) {
        res.status(500).json({msg: "Erro in user creation", error});
    }
}
module.exports = {createUser};