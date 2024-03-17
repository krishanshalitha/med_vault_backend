require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const medicineRouts= require('./routes/medicines')

//express app
const app=express()

//use middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/', (req,res)=>{
    res.json({mssg:'Welcome to the app'})
})

// routes
app.use('/api/medicines',medicineRouts)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen request
        app.listen(process.env.PORT, ()=>{
            console.log('connect to db & listing on port', process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

process.env



// const http = require('http');
// const app = require('./app')


// const port = process.env.PORT || 3000;


// const server = http.createServer(app);


// server.listen(port, console.log(`Server started on port ${port}`));

