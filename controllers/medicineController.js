const Medicine=require('../models/medicineModel')
const mongoose = require('mongoose')



 
 

//get all Medicines
const getMedicines=async (req,res )=> {
    const Medicines = await Medicine.find({}).sort({createdAt: -1})
    res.status(200).json(Medicines)
}


// get a single Medicine
const getMedicine=async (req,res )=> {
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such a Medicine'})
    }

    const Medicine = await Medicine.findById(id)

    if(!Medicine){
        return res.status(400).json({error: 'No such Medicine'})
    }
    res.status(200).json(Medicine)
}


