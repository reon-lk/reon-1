const mongoose = require("mongoose");

//schema for page
const pageSchema = {
    pId:{
        type:'string',
        required:true,
        unique:true
    },
    uId:{
        type:'string',
        required:true,
        unique:true
    },
    name:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    description:{
        type:'string'
    },
    phone:{
        type:'string',
        required:true,
        unique:true
    },
    // logo:{
    //     type:'string'
    // },
    // banner:{
    //     type:'string'
    // },
    link:{
        type:'string',
        required:true,
        min:4,
        max:255,
        unique:true
    },
    statuses:{
        type:'string',
        required:true
    },
    statusComment:{
        type:'string',
        required:true
    },
    tempName:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    tempDescription:{
        type:'string'
    },
    tempPhone:{
        type:'string',
        required:true,
        unique:true
    },
    // tempLogo:{
    //     type:'string'
    // },
    // tempBanner:{
    //     type:'string'
    // },
    tempLink:{
        type:'string',
        required:true,
        min:4,
        max:255,
        unique:true
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

// schema for vehicle
const vehicleSchema = {
    vId:{
        type:'string',
        required:true,
        unique:true
    },
    pId:{
        type:'string',
        required:true
    },
    type:{
        type:'string',
        required:true
    },
    vehicleNo:{
        type:'string',
        required:true,
        unique:true
    },
    name:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    description:{
        type:'string',
        required:true
    },
    fuelType:{
        type:"string",
        required:true
    },
    acType:{
        type:'string',
        required:true
    },
    statuses:{
        type:'string',
        required:true
    },
    statusComment:{
        type:'string',
        required:true
    },
    tempName:{
        type:'string',
        min:4,
        max:255
    },
    tempDescription:{
        type:'string'
    },
    tempFuelType:{
        type:'string'
    },
    tempAcType:{
        type:'string'
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

module.exports.pageModel = mongoose.model("page", pageSchema);
module.exports.vehicleModel = mongoose.model("vehicle", vehicleSchema);