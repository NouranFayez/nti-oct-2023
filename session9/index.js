//npm i mongoose
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/oct-s9")
//modeling db collection
const User = mongoose.model("user", {
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
const myUser = new User({name:"marwa", email:"marwa@techs.com"})
myUser.save()
.then(res=> console.log(res))
.catch(err=> console.log(err))