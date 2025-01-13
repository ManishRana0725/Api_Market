const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ msg: 'No authentication token, access denied' });

        // Verify the token
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!verified) return res.status(401).json({ msg: 'Token verification failed, access denied' });

        // Attach user ID to the request object
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

module.exports = auth;
