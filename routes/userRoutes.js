const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth'); // Middleware for protected routes

// User Registration
router.post('/register', UserCtrl.register);
router.post('/refreshToken' , UserCtrl.refreshToken);
// User Login
router.post('/login', UserCtrl.login);
router.post('/logout' , UserCtrl.logout);
// Get User Details (Protected Route)
router.get('/profile', auth, UserCtrl.getUserDetails);

module.exports = router;

