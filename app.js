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
 

 //The connection throws an error
 mongoose.connection.on("error",function(err){
    console.log('Mongoose default connection error: ' + err);
 });
 
 
 //connection disconnected
 mongoose.connection.on('disconnected',function(){
    console.log('Mongoose default connection is disconnected');
 });
 
 
 //Close the mongoose connection
 process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection disconnected through web application"
        );
        process.exit(0)
    });
 
 
 })
 

 app.use(morgan('dev')); //Used Morgan
 //app.use('/uploads',express.static('uploads'));
 app.use(bodyParser.urlencoded({extended: false}));  //this for encorded Url's supporting rech data
 app.use(bodyParser.json());     //body paser for json data
 
 
 app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Contend-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT , POST , PATCH , DELETE , GET');
        return res.status(200).json({});
    }
    next();
 });
 
 
 /////////////////////////////////////////////////////

const createMedicineForm = document.getElementById('create-medicine-form');
const medicinesTableBody = document.getElementById('medicines-table tbody');



// Send a new medicine to the server
createMedicineForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    await fetch('/medicines', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price: parseFloat(price), quantity: parseInt(quantity) })
    });

    createMedicineForm.reset();
    location.reload();
});
