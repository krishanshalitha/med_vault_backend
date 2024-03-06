const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true // to avoid deprecation warning
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)); // Handle error here

// Routes
const medicineRoutes = require('./routes/medicineRoutes');
app.use('/medicines', medicineRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



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
//                             url:'http://localhost:4000/medicines/' + result._id
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