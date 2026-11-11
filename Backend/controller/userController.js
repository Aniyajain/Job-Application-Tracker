const user = require("../model/userSchema");
const {isValidEmail, isValidPassword} = require("../utils/Validators");

const createUser = async(req, res)=>{
    try {
        console.log(req.body);

        if( !isValidEmail.test(req.body.Email)){
        return res.status(400).json({msg: "Enter a valid Email"});

       }
       if(!isValidPassword.test(req.body.Password)){
        return res.status(400).json({msg: "Password must contain at least 8 characters, uppercase, lowercase, number and special character"});
       }
        
        const existingUser = await user.findOne({Email : req.body.Email});
        if(existingUser){
            return res.status(409).json({msg: "User with this email ID exists"})
            

        }
       
        const User = await user.create({Email : req.body.Email, Password : req.body.Password});
        res.status(201).json({msg: "User Created", user});

        
        
        
    } catch (error) {
        res.status(500).json({msg: "Erro in user creation", error});
    }
}
const LoginUser = async(req, res)=>{
    try {
        if(!isValidEmail.test(req.body.Email)){
            return res.status(400).json({msg: "Enter a valid Email"});
        }
        if(!isValidPassword.test(req.body.Password)){
            return res.status(400).json({msg: "Password must contain at least 8 characters, uppercase, lowercase, number and special character"});
        }
        const existUser = await user.findOne({Email : req.body.Email});
    if(!existUser){
        return res.status(404).json({msg: "No account with this email"});
    }
    res.status(200).json({msg: "Login Successfully", Email : existUser.Email});
    } catch (error) {
        res.status(500).json({msg: "Error in Login", error});
        
    }
}
module.exports = {createUser, LoginUser};