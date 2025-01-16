const jwt = require('jsonwebtoken');
const Users = require('../models/userModel');
const auth = async (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ msg: 'No authentication token, access denied' });

        // Verify the token
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!verified) return res.status(401).json({ msg: 'Token verification failed, access denied' });
    
        const user = await Users.findById(verified.id); // Validate token ID matches a user
    
        if (!user) return res.status(404).json({ msg: 'User not found' });
        req.user = user; // Attach user to the request
        next();
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

module.exports = auth;
