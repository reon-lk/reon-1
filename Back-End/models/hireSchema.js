const mongoose = require("mongoose");

//schema for page
const carHireSchema = {
    hId:{
        type:'string',
        required:true,
        unique:true
    },
    vId:{
        type:'string',
        required:true
    },
    uId:{
        type:'string',
        required:true
    },
    to:{
        type:'string',
        required:true
    },
    from:{
        type:'string',
        required:true
    },
    time:{
        type:'string',
        required:true
    },
    isAccept:{
        type:'string'
    },
    acceptAmount:{
        type:Number
    },
    acceptTime:{
        type:'string'
    },
    isConform:{
        type:'string'
    },
    conformTime:{
        type:'string'
    },
    createDate:{
        type:'string',
        required:true
    }
}

exports.carHireModel = mongoose.model("hire", carHireSchema);