// const express = require('express');

// const {
//     createMedicine,
//     getMedicines,
//     getMedicine,
//     updateMedicine,
//     deleteMedicine
// } = require('../controllers/medicineController');

// const router = express.Router();

// // get all medicines
// router.get('/', getMedicines);

// // get single medicine
// router.get('/:id', getMedicine);

// // POST a new medicine
// router.post('/', createMedicine);

// // DELETE a medicine
// router.delete('/:id', deleteMedicine);

// // UPDATE a medicine
// router.patch('/:id', updateMedicine);

// module.exports = router;



// Import Express library
const express = require('express');

// Import controller functions for handling CRUD operations on medicines
const {
    createMedicine,
    getMedicines,
    getMedicine,
    updateMedicine,
    deleteMedicine
} = require('../controllers/medicineController');

// Create a new Router instance from Express
const router = express.Router();

// Define routes for various CRUD operations on medicines
router.get('/', getMedicines); // Route to get all medicines
router.get('/:id', getMedicine); // Route to get a specific medicine by ID
router.post('/', createMedicine); // Route to create a new medicine
router.delete('/:id', deleteMedicine); // Route to delete a medicine by ID
router.patch('/:id', updateMedicine); // Route to update a medicine by ID (partial update)

// Export the router for use in other modules
module.exports = router;
