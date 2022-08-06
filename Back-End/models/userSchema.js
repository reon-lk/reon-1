const mongoose = require("mongoose");

// User Schema
const userSchema = {
    uId: {
        type:'string',
        required:true,
        unique:true
    },
    firstName:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    lastName:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    email:{
        type:'string',
        required:true,
        unique:true
    },
    password:{
        type:'string',
        required:true
    },
    role:{
        type:'string',
        required:true
    },
    statuses:{
        type:'string',
        required:true
    },
    isPage:{
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

module.exports.userModel = mongoose.model("user", userSchema);