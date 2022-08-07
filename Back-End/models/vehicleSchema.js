const mongoose = require("mongoose");
// //schema for vehicle

const vehicleSchema = {
    vId:Number,
    pId:{
        type:Number,
        
    },
    category:{
        type:'string',
        required:true,
    },
    vehicleType:{
        type:'string',
        required:true,
    },
    seats:{
        type:'string',
        required:true
    },
    location:{
        type:'string',
        required:true,
    },
    vehicleName:{
        type:'string',
        required:true,
        
    },
    tempCategory:{
        type:'string',
        required:true,
    },
    tempVehicleType:{
        type:'string',
        required:true,
    },
    tempSeats:{
        type:'string',
        required:true,
    },
    tempLocation:{
        type:'string',
        required:true,
    },
    tempVehicleName:{
        type:'string',
        required:true,
    },


    
   
    statuses:{
        type:'string',
        required:true
    },
    statusComment:{
        type:'string',
        required:true
    },
    createDate:{
        type:'string',
        required:true
    },
    updateDate:{
        type:'string',
        required:true
    }
};

module.exports.vehicleModel = mongoose.model("Vehicle", vehicleSchema);