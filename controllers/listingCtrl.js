const Users = require('../models/userModel');
const jwt = require("jsonwebtoken");

const UserCtrl = {
    register: async(req , res)=>{
        try{
            const {name , email , password} = req.body;
            
            
            
            const user = await Users.findOne({email})

            if(user) return res.status(400).json({msg:"Email already Registered"})
            
            if(password.length < 6)return res.status(400).json({msg:"Password atleast 6 char"})
            
            // password encryption
            const passwordHash = await bcrypt.hash(password , 10);
            
            const newuser = new Users({
                name , email , password:passwordHash
            })
            console.log(newuser);
            await newuser.save()

            // creating jwt authentication
            const accesstoken = createAccessToken({id : newuser._id})
            const refreshtoken = createRefreshToken({id : newuser._id})
            res.json(accesstoken);
        }catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
}

const createAccessToken = (payload)=>{
    return jwt.sign(payload , process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'} )
}
const createRefreshToken = (payload)=>{
    return jwt.sign(payload , process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'} )
}

module.exports = UserCtrl
