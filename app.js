const express = require('express'); //setup the globle libraries
const app = express();
const morgan = require('morgan'); //Logger for node
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //pass date to database


const medicineRoutes = require('./routes/medicines');   //connect player route
// const pharmacyRoutes = require('./routes/pharmacies');    //connect user route


/*
*
* Connects to Mongodb instance on Atlas
*
*/






const MONGODB_URI = 'mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority';
const option =  {
   useNewUrlParser:true,
   useUnifiedTopology: true,
   useCreateIndex:true,
};


/*Test the server wether connect or not*/
// Remove useCreateIndex option
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });





//Test the mongodb connection
mongoose.connection.on('connected',() => {
    console.log('Mongoose is connected');
 });
 
 