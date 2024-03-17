const express = require('express');

const {
    createMedicine,
    getMedicines,
    getMedicine,
    updateMedicine,
    deleteMedicine
} = require('../controllers/medicineController');

const router = express.Router();

// get all medicines
router.get('/', getMedicines);

// get single medicine
router.get('/:id', getMedicine);

// POST a new medicine
router.post('/', createMedicine);

// DELETE a medicine
router.delete('/:id', deleteMedicine);

// UPDATE a medicine
router.patch('/:id', updateMedicine);

module.exports = router;



// const express = require('express'); //Globle express lib
// const router = express.Router(); //import express router
// const multer = require('multer'); //multer for uploading an image

// // const checkAuthentication = require('../middleware/authentication');
// const medicineController = require('../controllers/medicineController');

// //Create player details
// router.post('/', medicineController.addNewMedicineDetails);


// module.exports = router;

