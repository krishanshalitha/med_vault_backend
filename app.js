// const express = require('express'); //setup the globle libraries
// const app = express();
// const morgan = require('morgan'); //Logger for node
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose'); //pass date to database


// const medicineRoutes = require('./routes/medicines');   //connect medicine route
// // const pharmacyRoutes = require('./routes/pharmacies');    //connect pharmacy route


// const MONGODB_URI = 'mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority';
// const option =  {
//    useNewUrlParser:true,
//    useUnifiedTopology: true,
//    useCreateIndex:true,
// };

// // Remove useCreateIndex option
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// //Test the mongodb connection
// mongoose.connection.on('connected',() => {
//     console.log('Mongoose is connected');
//  });

//  //The connection throws an error
//  mongoose.connection.on("error",function(err){
//     console.log('Mongoose default connection error: ' + err);
//  });
 
//  //connection disconnected
//  mongoose.connection.on('disconnected',function(){
//     console.log('Mongoose default connection is disconnected');
//  });
 
//  //Close the mongoose connection
//  process.on("SIGINT", function(){
//     mongoose.connection.close(function(){
//         console.log("Mongoose default connection disconnected through web application"
//         );
//         process.exit(0)
//     });
//  })
 
//  app.use(morgan('dev')); //Used Morgan
//  //app.use('/uploads',express.static('uploads'));
//  app.use(bodyParser.urlencoded({extended: false}));  //this for encorded Url's supporting rech data
//  app.use(bodyParser.json());     //body paser for json data
 
//  app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Contend-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT , POST , PATCH , DELETE , GET');
//         return res.status(200).json({});
//     }
//     next();
//  });
 


// Import required libraries
const express = require('express');
const app = express(); // Create an Express application
const morgan = require('morgan'); // HTTP request logger middleware
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const mongoose = require('mongoose'); // MongoDB object modeling tool

const medicineRoutes = require('./routes/medicines'); // Import routes for medicines

// MongoDB connection URI retrieved from environment variable
const MONGODB_URI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listeners for MongoDB connection status
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

mongoose.connection.on("error", function(err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection is disconnected');
});

// Handle SIGINT signal to gracefully close MongoDB connection
process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose default connection disconnected through web application");
        process.exit(0);
    });
});

// Middleware setup
app.use(morgan('dev')); // HTTP request logger
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.use(bodyParser.json()); // Parse JSON request bodies

// Middleware to handle CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allow specified headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); // Allow specified HTTP methods
        return res.status(200).json({}); // Respond with success for preflight requests
    }
    next(); // Move to the next middleware
});

module.exports = app; // Export the Express application for use in other modules
