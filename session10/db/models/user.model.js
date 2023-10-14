const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:true
    }, 
    lname:{
        type:String,
        trim:true,
        lowercase: true,
        minLength:2,
        maxLength:20,
        required:true
    }, 
    age:{
        type:Number,
        required:true,
        min:21,
        max:60
    }, 
    password:{        
        type:String,
        trim:true,
        required:true
    }, 
    email:{
        type:String,
        trim:true,
        lowercase: true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))throw new Error("invalid email format")
        }
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    gender:{
        type:String,
        trim:true,
        lowercase: true,
        enum:["male", "female"]
    },
    image:{
        type:String,
        trim:true,
    }, 
    dOfBirth:{
        type:Date
    },
    addresses:[
        {
            addrType:{
                type:String,
                trim:true,
                lowercase: true,
            },
            addrDetails:{
                type:String,
                trim:true,
                lowercase: true,
            }
        }
    ]
}, {
    timestamps: true
})

userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12)
})

userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}

const userModel= mongoose.model("User", userSchema)

module.exports = userModel