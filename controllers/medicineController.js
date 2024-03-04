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


//create new Medicine
const createMedicine=async (req,res)=>{
    const {title,load,reps}=req.body

    // add doc to db
    try{
        const Medicine=await Medicine.create({medname,description,price,quantity})
        res.status(200).json(Medicine)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a Medicine
const deleteMedicine= async (req,res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such a Medicine'})
    }

    const Medicine=await Medicine.findByIdAndDelete({_id: id})

    if(!Medicine){
        return res.status(400).json({error: 'No such Medicine'})
    }

    res.status(200).json(Medicine)
}

// update a Medicine
const updateMedicine=async (req,res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such a Medicine'})
    }

    const Medicine = await Medicine.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!Medicine){
        return res.status(400).json({error: 'No such Medicine'})
    }

    res.status(200).json(Medicine)
}


module.exports={
    getMedicines,
    getMedicine,
    createMedicine,
    deleteMedicine,
    updateMedicine
}