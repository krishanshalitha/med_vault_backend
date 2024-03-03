const mongoose=require('mongoose');

// const Schema=mongoose.Schema

// const medicineSchema=new Schema({
const medicineSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    medname: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
}, {
    // timestamps:true
});

module.exports=mongoose.model('medicines',medicineSchema);