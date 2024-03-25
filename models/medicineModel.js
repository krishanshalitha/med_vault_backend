// const mongoose=require('mongoose');

// const Schema=mongoose.Schema

// const medicineSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     quantity: {
//         type: Number,
//         required: true
//     }
// }, { timestamps: true });

// module.exports=mongoose.model('Pharmacy1',medicineSchema)



// Import the Mongoose library
const mongoose = require('mongoose');

// Retrieve the Schema object from Mongoose
const Schema = mongoose.Schema;

// Define a new schema for medicines
const medicineSchema = new Schema({
    // Define the 'name' field with type String, and it's required
    name: {
        type: String,
        required: true
    },
    // Define the 'description' field with type String, and it's required
    description: {
        type: String,
        required: true
    },
    // Define the 'price' field with type Number, and it's required
    price: {
        type: Number,
        required: true
    },
    // Define the 'quantity' field with type Number, and it's required
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // Include timestamps for createdAt and updatedAt

// Export the model based on the schema, naming it 'Medicine'
module.exports = mongoose.model('Medicine', medicineSchema);
