const mongoose = require("mongoose")
const validator = require("validator")
const taskModel = mongoose.model("task", {
    title:{
        type:String,
        trim:true,
        required:true,
        minLength:3,
        maxLength:20,
        unique:true
    },
    content:{
        type:String,
        trim:true,
        required:true,
        minLength:3,
        maxLength:20,
        unique:true
    },
    status:{
        type:Boolean,
        default: false
    },
    gender:{
        type : String ,
        lowercase:true,
        enum: ['male', 'female']
        },
    addedAt:{
        type:Date,
        default:Date.now()
    },
    userEmail:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid format")
        }
    },
    userAge:{
        type:Number,
        min:21, 
        max:60,
        // validate(value){
        //     // if(userAge>35) throw new Error("enta 3gzt")
        //     if( !validator.isMobilePhone())
        // }
    }
})

module.exports=taskModel