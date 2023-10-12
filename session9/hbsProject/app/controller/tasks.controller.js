const deal = require("../helper/dealWithJson.helper")
const taskModel = require("../../models/task.model")
class Task{
    static add = (req,res) => {
        res.render("add", {
            pageTitle: "Add Task"
        })
    }
    static addLogic = async(req,res)=>{
        try{
            const taskData = new taskModel(req.query)
            await taskData.save()
            res.redirect("/")
        }
        catch(e){
            let myErrors = {}
            myErrors.title = e.errors.title? e.errors.title.message:null
            myErrors.content = e.errors.content? e.errors.content.message:null
            myErrors.userAge = e.errors.userAge? e.errors.userAge.message : null
            myErrors.userEmail = e.errors.userEmail?e.errors.userEmail.message:null
            myErrors.gender = e.errors.gender? e.errors.gender.message :null
            res.render("add", {
                pageTitle: "invalid add",
                myErrors,
                task: req.query,
                gender: req.query.gender == "male"? true:false
            })
        }
    }
    static addPost = (req,res) => {
        res.render("addPost", {
            pageTitle: "Add Task"
        })
    }
    static addPostLogic = async(req,res)=>{
        try{
            const taskData = new taskModel(req.body)
            await taskData.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static showAll = async(req,res) => {
        try{
            const allUsers = await taskModel.find()
            res.render("all", {
                pageTitle: "All Tasks",
                users : allUsers
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static showSingle = async(req,res) => {
        try{
            // const task = await taskModel.findOne({_id: req.params.id})
            const task = await taskModel.findById(req.params.id)
            res.render("single", {
                pageTitle: "Single Task",
                task
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static edit = async(req,res) => {
        try{
        const task = await taskModel.findById(req.params.id)
        res.render("edit", {
            pageTitle: "Edit Task",
            task
        })
    }
    catch(e){
        res.send(e)
    }
    }
    static editLogic=async(req,res)=>{
        try{
            // let task = await taskModel.findById(req.params.id)
            // task.title = req.body.title
            // await task.save()
            req.body.status = req.body.status=="on"? true:false
            await taskModel.findByIdAndUpdate(req.params.id, req.body, {
                runValidators:true
            })
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static del = async(req,res) => {
        try{
            await taskModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static activate = async(req,res) => {
        try{
            const task = await taskModel.findById(req.params.id)
            task.status=true
            await task.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
}

module.exports = Task