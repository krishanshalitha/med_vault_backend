// const Medicine = require('../models/medicineModel');
// const mongoose = require('mongoose');

// // Get all medicines
// const getMedicines = async (req, res) => {
//     const medicines = await Medicine.find({}).sort({ createdAt: -1 });
//     res.status(200).json(medicines);
// };

// // Get a single medicine
// const getMedicine = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: 'No such medicine' });
//     }

//     const medicine = await Medicine.findById(id);

//     if (!medicine) {
//         return res.status(400).json({ error: 'No such medicine' });
//     }
//     res.status(200).json(medicine);
// };

// // Create a new medicine
// const createMedicine = async (req, res) => {
//     const { name, description, price, quantity } = req.body; // Corrected destructuring

//     try {
//         const medicine = await Medicine.create({ name, description, price, quantity });
//         res.status(200).json(medicine);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


// // Delete a medicine
// const deleteMedicine = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: 'No such medicine' });
//     }

//     const medicine = await Medicine.findByIdAndDelete({ _id: id });

//     if (!medicine) {
//         return res.status(400).json({ error: 'No such medicine' });
//     }

//     res.status(200).json(medicine);
// };

// // Update a medicine
// const updateMedicine = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: 'No such medicine' });
//     }

//     const medicine = await Medicine.findOneAndUpdate({ _id: id }, {
//         ...req.body
//     });

//     if (!medicine) {
//         return res.status(400).json({ error: 'No such medicine' });
//     }

//     res.status(200).json(medicine);
// };

// module.exports = {
//     getMedicines,
//     getMedicine,
//     createMedicine,
//     deleteMedicine,
//     updateMedicine
// };



// Import required modules
const Medicine = require('../models/medicineModel'); // Import the Medicine model
const mongoose = require('mongoose'); // Import mongoose for ObjectId validation

// Define asynchronous functions for handling CRUD operations on medicines
const getMedicines = async (req, res) => { /* Implementation */ }; // Function to get all medicines
const getMedicine = async (req, res) => { /* Implementation */ }; // Function to get a specific medicine
const createMedicine = async (req, res) => { /* Implementation */ }; // Function to create a new medicine
const deleteMedicine = async (req, res) => { /* Implementation */ }; // Function to delete a medicine

// Function to update a medicine
const updateMedicine = async (req, res) => {
    const { id } = req.params; // Extract the medicine ID from request parameters

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        // If not valid, return a 404 error response
        return res.status(404).json({ error: 'No such medicine' });
    }

    try {
        // Try to find the medicine by ID and update it with the provided request body
        const updatedMedicine = await Medicine.findByIdAndUpdate(id, req.body, { new: true });
        // If update successful, return the updated medicine
        res.status(200).json(updatedMedicine);
    } catch (error) {
        // If an error occurs during update, return a 400 error response
        res.status(400).json({ error: 'Failed to update medicine' });
    }
};

// Export all CRUD functions for medicines
module.exports = {
    getMedicines, // Function to get all medicines
    getMedicine, // Function to get a specific medicine
    createMedicine, // Function to create a new medicine
    deleteMedicine, // Function to delete a medicine
    updateMedicine // Function to update a medicine
};
