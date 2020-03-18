const mongoose = require("mongoose");
const db = require('./db')

const mlabURI = "mongodb://localhost/test"
const dbName = 'user-api';
const con = mongoose.connect(mlabURI,{ useNewUrlParser: true},(error)=>{
    if(error){
        console.log('Ket noi that bai '+error)
    }else{
        console.log('Ket noi thanh cong')
    }
})

module.exports = con;
