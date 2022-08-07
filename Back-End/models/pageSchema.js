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
    pageName:{
        type:'string',
        required:[true, "Please add a pageName"],
        min:4,
        max:255
    },
    phone:{
        type:'string',
        required:[true, "Please add a phone number"],
        unique:true
    },
    address:{
        type:'string',
        required:[true, "Please add an address"]
    },
    link:{
        type:"string",
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
    tempPageName:{
        type:'string',
        required:true,
        min:4,
        max:255
    },
    tempPhone:{
        type:'string',
        required:true,
        unique:true
    },
    tempLink:{
        type:"string",
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
}

module.exports.pageModel = mongoose.model("Page", pageSchema);