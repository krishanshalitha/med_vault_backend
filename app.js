const express = require('express'); //setup the globle libraries
const app = express();
const morgan = require('morgan'); //Logger for node
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //pass date to database


const medicineRoutes = require('./routes/medicines');   //connect player route
// const pharmacyRoutes = require('./routes/pharmacies');    //connect user route


/*
*
* Connects to Mongodb instance on Atles
*
*/






const MONGODB_URI = 'mongodb+srv://krishanshalitha:MCmkNePgcmSFYaaQ@medvault.drffzvu.mongodb.net/stock?retryWrites=true&w=majority';
const option =  {
   useNewUrlParser:true,
   useUnifiedTopology: true,
   useCreateIndex:true,
};


/*Test the server wether connect or not*/
mongoose.connect(MONGODB_URI, option, (err) => {
   if (err){
       console.error("Connection could not be create,Please recheck",
       err
       );
   }else{
       console.log("Connection to db ready");
   }
});


