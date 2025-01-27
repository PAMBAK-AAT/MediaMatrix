
const UserModel  = require("../models/userModel");

async function checkEmail(req,res){

    try{
        const {email} = req.body;
        const currEmail = await UserModel.findOne({email}).select("-password");
    
        if(!currEmail){
            res.status(500).json({
                message: "user not exist",
                error: true
            })
        }
    
        return res.status(200).json({
            message: "email verify",
            success: true,
            data: currEmail
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message || err,
            err: true
        })
    }

}

module.exports = checkEmail;