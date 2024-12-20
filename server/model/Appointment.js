const mongoose = require("mongoose")

const bookAppointment = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone_Numbers:{
        countryName:{
            type:String,
            
        },
        countrycode:{
            type:Number,
           
        },
        Phone_Number:{
            type:Number,
            required:true
        }
    },
    Luxury:{
        type:String,
        required:true
    },
    Text_messages:{
        textcountryName:{
            type:String,
            
        },
        textcountrycode:{
            type:Number,
           
        },
        textPhone_Number:{
            type:Number,
            required:true
        }
    },
    AppointmentDate:{
        type:Date,
        required:true
    },
    AppointmentSolot:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default: Date.now(),
        required:true
    }
})

module.exports = mongoose.model("appointment",bookAppointment)