const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    type:{
        type:String,
        trim:true,
        lowercase: true,
        required:true,
        enum:["file", "txt"]
    },
    title:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:true
    }, 
    content:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:function(){ return this.type =="txt"}
    }, 
    file:{
        type:String,
        trim:true,
        required: function(){ return this.type =="file"}
    }, 
    // userId:{}
},{
    timestamps:true
})
const taskModel = mongoose.model ("Task",taskSchema)
module.expots = taskModel