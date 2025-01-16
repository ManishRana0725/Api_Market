const Api = require('../models/apiModel'); // Replace with the correct model name

const ApiController = {
    // Create a new API
    createApi: async (req, res) => {
        try {
            const { name, description, category, pricing, endpoints, documentationLink } = req.body;
            console.log("api")
            // Validate required fields
            if (!name || !category || !documentationLink) {
                return res.status(400).json({ msg: 'Required fields are missing' });
            }

            const newApi = new Api({
                name,
                description,
                category,
                pricing,
                endpoints,
                documentationLink,
                createdBy: req.user.id,
            });
            console.log("api is saved")
            await newApi.save();
            res.status(201).json({ msg: 'API created successfully', newApi });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Get all APIs
    getAllApis: async (req, res) => {
        try {
            const apis = await Api.find().populate('category', 'name'); // Populate category name if necessary
            res.status(200).json(apis);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Get API by ID
    getApiById: async (req, res) => {
        try {
            const api = await Api.findById(req.params.id);
            if (!api) return res.status(404).json({ msg: 'API not found' });
            res.status(200).json(api);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Update an API
    updateApi: async (req, res) => {
        try {
            const updates = req.body;
            const updatedApi = await Api.findByIdAndUpdate(req.params.id, updates, { new: true });
            if (!updatedApi) return res.status(404).json({ msg: 'API not found' });
            res.status(200).json({ msg: 'API updated successfully', updatedApi });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    // Delete an API
    deleteApi: async (req, res) => {
        try {
            const deletedApi = await Api.findByIdAndDelete(req.params.id);
            if (!deletedApi) return res.status(404).json({ msg: 'API not found' });
            res.status(200).json({ msg: 'API deleted successfully' });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = ApiController;
