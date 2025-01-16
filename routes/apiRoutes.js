const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Authenticate token
const authAdmin = require('../middleware/authAdmin'); // Ensure admin access
const ApiController = require('../controllers/apiCtrl');

// Route to create a new API
router.post('/create', auth, authAdmin, ApiController.createApi);

// Route to get all APIs
router.get('/', auth, ApiController.getAllApis);

// Route to get a single API by ID
router.get('/:id', auth, ApiController.getApiById);

// Route to update an API
router.put('/:id', auth, authAdmin, ApiController.updateApi);

// Route to delete an API
router.delete('/:id', auth, authAdmin, ApiController.deleteApi);

module.exports = router;
