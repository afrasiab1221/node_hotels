const mongoose = require('mongoose');

//Define the MongoDB URL

const mongoURL = 'mongodb://localhost:27017/hotels'

// Set Up the MongoDB Connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Access the Default Connection Object:
//  Mongoose maintains a default connection
const db = mongoose.connection;

//define listeners

db.on('connected',()=>{
    console.log('connected to mongoDB server')
});

db.on('error',(err)=>{
    console.log('Error in connection',err)
});

db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server')
})

//export db object
module.exports = db;