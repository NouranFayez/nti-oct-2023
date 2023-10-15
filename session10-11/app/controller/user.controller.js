const {resGenerator} = require("../helper")
const userModel = require("../../db/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            resGenerator(res,200, true, user, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static showAll = async(req,res)=>{
        try{
            const users = await userModel.find()
            resGenerator(res,200, true, users, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static getSingle = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            if(!user) throw new Error("user not found")
            resGenerator(res,200, true, user, "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            resGenerator(res,200, true, null , "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
    }
    static delSingle = async(req,res)=>{        
        try{
            await userModel.findByIdAndDelete(req.params.id)
            resGenerator(res,200, true, null , "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }
}
    static editSingle = async(req,res)=>{
        try{
            await userModel.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { runValidators:true }
                )
            resGenerator(res,200, true, "user", "registered")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid register")
        }

    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.login(req.body.email, req.body.password)
            const token = await user.generateToken()
            resGenerator(res,200, true, {user, token}, "Logged in")
        }
        catch(e){
            resGenerator(res,500, false, e.message, "Invalid Login")
        }
    }
}
module.exports = User