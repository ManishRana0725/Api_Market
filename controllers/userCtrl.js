const Users = require('../models/userModel'); // Import the User schema
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const UserCtrl = {
    // Register a new user
    register: async (req, res) => {
        try {
            const { username, email, password, role } = req.body;

            // Check if the user already exists
            const existingUser = await Users.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ msg: "Email already registered" });
            }

            // Validate password length
            if (password.length < 8) {
                return res.status(400).json({ msg: "Password must be at least 8 characters long" });
            }

            // Password encryption
            const passwordHash = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new Users({
                username,
                email,
                password: passwordHash,
                role: role || 'user', // Default to 'user' if no role is provided
            });

            // Save the user to the database
            await newUser.save();
            //res.send("user registered!")

            // Create jwt to authentication tokens
            const accessToken = createAccessToken({ id: newUser._id, role: newUser.role });
            const refreshToken = createRefreshToken({ id: newUser._id, role: newUser.role });

            res.cookie('refreshToken' , refreshToken,{
                httpOnly:true,
                path:"/users/refreshToken"
            })
            // Return the access token
            res.json({ accessToken, refreshToken });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    refreshToken:async(req , res)=>{
        try{
            const rf_token = req.cookies.refreshToken;
            // res.json({rf_token})

            if(!rf_token)return res.status(400).json({msg:"Please login and Registers"});
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
                if(err)return res.status(400).json({msg:"Please login and Register"})
                const accessToken = createAccessToken({id:user.id})
            res.json({user , accessToken})
        })
        }catch(err){
            res.status(500).json({msg:err.message})
        }
        
    },
    // Login a user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Check if the user exists
            const user = await Users.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: "User does not exist" });
            }

            // Validate the password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            // Create authentication tokens
            const accessToken = createAccessToken({ id: user._id, role: user.role });
            const refreshToken = createRefreshToken({ id: user._id, role: user.role });

            res.json({ accessToken, refreshToken });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    // Get user details
    //dekhna hai 
    getUserDetails: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password'); // Exclude the password field
            if (!user) {
                return res.status(404).json({ msg: "User not found" });
            }
            res.json(user);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

// Utility functions to create tokens
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

module.exports = UserCtrl;

