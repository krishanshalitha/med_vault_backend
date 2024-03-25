// require('dotenv').config()

// const express=require('express')
// const mongoose=require('mongoose')
// const medicineRouts= require('./routes/medicines')

// //express app
// const app=express()

// //use middleware
// app.use(express.json())

// app.use((req,res,next)=>{
//     console.log(req.path,req.method)
//     next()
// })

// app.get('/', (req,res)=>{
//     res.json({mssg:'Welcome to the app'})
// })

// // routes
// app.use('/api/medicines',medicineRouts)

// // connect to db
// mongoose.connect(process.env.MONGO_URI)
//     .then(()=>{
//         // listen request
//         app.listen(process.env.PORT, ()=>{
//             console.log('connect to db & listing on port', process.env.PORT)
//         })
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// process.env


// Load environment variables from a .env file
require('dotenv').config();

// Import required libraries
const express = require('express');
const mongoose = require('mongoose');
const medicineRoutes = require('./routes/medicines');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies of requests
app.use(express.json());

// Middleware to log the path and method of each request
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route for the root URL
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' });
});

// Routes for handling medicines
app.use('/api/medicines', medicineRoutes);

// Connect to MongoDB database using environment variable for URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Start the Express application to listen for incoming requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error(error);
    });
