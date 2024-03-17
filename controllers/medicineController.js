const Medicine = require('../models/medicineModel');
const mongoose = require('mongoose');

// Get all medicines
const getMedicines = async (req, res) => {
    const medicines = await Medicine.find({}).sort({ createdAt: -1 });
    res.status(200).json(medicines);
};

// Get a single medicine
const getMedicine = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    const medicine = await Medicine.findById(id);

    if (!medicine) {
        return res.status(400).json({ error: 'No such medicine' });
    }
    res.status(200).json(medicine);
};

// Create a new medicine
const createMedicine = async (req, res) => {
    const { } = req.body;
    const { name, description, price, quantity } = req.body;

    try {
        const medicine = await Medicine.create({ name, description, price, quantity });
        res.status(200).json(medicine);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a medicine
const deleteMedicine = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    const medicine = await Medicine.findByIdAndDelete({ _id: id });

    if (!medicine) {
        return res.status(400).json({ error: 'No such medicine' });
    }

    res.status(200).json(medicine);
};

// Update a medicine
const updateMedicine = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    const medicine = await Medicine.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!medicine) {
        return res.status(400).json({ error: 'No such medicine' });
    }

    res.status(200).json(medicine);
};

module.exports = {
    getMedicines,
    getMedicine,
    createMedicine,
    deleteMedicine,
    updateMedicine
};



// const Medicine=require('../models/medicineModel')
// const mongoose = require('mongoose')



// //control method for add medicine details
// exports.addNewMedicineDetails = (req, res, next) => {
//     const medicine = new Medicine({
//         _id:new mongoose.Types.ObjectId(),
//         medname:req.body.medname,
//         description:req.body.description,
//         price:req.body.price,
//         quantity:req.body.quantity,
//           });
//     medicine
//         .save()
//         .then(result => {
//             console.log(result);
//             res.status(200).json({
//                 message: "Created medicine details successfully",
//                 createdMedicine: {
//                     _id:result._id,
//                     medname:result.medname,
//                     description:result.description,
//                     price:result.price,
//                     quantity:result.quantity,                   
//                     request: {
//                             type: 'GET',
//                             url:'http://localhost:3000/medicines/' + result._id
//                     }
//                 }
//         });
//     })
//     .catch(err => {
//         console.log(err);
//             res.status(501).json({
//                 message: 'Can\'t create a new  player details, Please try again later'
//         });
//     });
//  }

 
 

// //get all Medicines
// const getMedicines=async (req,res )=> {
//     const Medicines = await Medicine.find({}).sort({createdAt: -1})
//     res.status(200).json(Medicines)
// }


// // get a single Medicine
// const getMedicine=async (req,res )=> {
//     const {id}= req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such a Medicine'})
//     }

//     const Medicine = await Medicine.findById(id)

//     if(!Medicine){
//         return res.status(400).json({error: 'No such Medicine'})
//     }
//     res.status(200).json(Medicine)
// }


// //create new Medicine
// const createMedicine=async (req,res)=>{
//     const {title,load,reps}=req.body

//     // add doc to db
//     try{
//         const Medicine=await Medicine.create({medname,description,price,quantity})
//         res.status(200).json(Medicine)
//     }catch(error){
//         res.status(400).json({error: error.message})
//     }
// }

// // delete a Medicine
// const deleteMedicine= async (req,res)=>{
//     const {id}= req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such a Medicine'})
//     }

//     const Medicine=await Medicine.findByIdAndDelete({_id: id})

//     if(!Medicine){
//         return res.status(400).json({error: 'No such Medicine'})
//     }

//     res.status(200).json(Medicine)
// }

// // update a Medicine
// const updateMedicine=async (req,res)=>{
//     const {id}= req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: 'No such a Medicine'})
//     }

//     const Medicine = await Medicine.findOneAndUpdate({_id:id},{
//         ...req.body
//     })

//     if(!Medicine){
//         return res.status(400).json({error: 'No such Medicine'})
//     }

//     res.status(200).json(Medicine)
// }


// module.exports={
//     getMedicines,
//     getMedicine,
//     createMedicine,
//     deleteMedicine,
//     updateMedicine
// }