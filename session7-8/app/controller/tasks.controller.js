const deal = require("../helper/dealWithJson.helper")
class Task{
    static add = (req,res) => {
        res.render("add", {
            pageTitle: "Add Task"
        })
    }
    static addLogic = (req,res)=>{
        const taskData = {id:Date.now(), status:false, ...req.query}
        const allTasks = deal.readFromJson()
        allTasks.push(taskData)  //concat
        deal.writeToJson(allTasks)
        res.redirect("/")
    }
    static addPost = (req,res) => {
        res.render("addPost", {
            pageTitle: "Add Task"
        })
    }
    static addPostLogic = (req,res)=>{
        const taskData = {id:Date.now(), status:false, ...req.body}
        const allTasks = deal.readFromJson()
        allTasks.push(taskData)  //concat
        deal.writeToJson(allTasks)
        res.redirect("/")
    }
    static showAll = (req,res) => {
        const allUsers = deal.readFromJson()
        res.render("all", {
            pageTitle: "All Tasks",
            users : allUsers
        })
    }
    static showSingle = (req,res) => {
        const taskId = req.params.id
        const allTasks = deal.readFromJson()
        const task = allTasks.find(t=> t.id == taskId)
        res.render("single", {
            pageTitle: "Single Task",
            task
        })
    }
    static edit = (req,res) => {
        const taskId = req.params.id
        const allTasks = deal.readFromJson()
        const task = allTasks.find(t=> t.id == taskId)
        res.render("edit", {
            pageTitle: "Edit Task",
            task
        })
    }
    static editLogic=(req,res)=>{
        const taskId = req.params.id
        const allTasks = deal.readFromJson()
        const index = allTasks.findIndex(t=> t.id == taskId)
        if(index == -1) res.redirect("/")
        allTasks[index] = {
            ...req.body,
            id:taskId,
            status: req.body.status == "on"? true : false
        }
        deal.writeToJson(allTasks)
        res.redirect(`/single/${taskId}`)
    }
    static del = (req,res) => {
        const taskId = req.params.id
        let allTasks = deal.readFromJson()
        allTasks = allTasks.filter( t => t.id != taskId)
        deal.writeToJson(allTasks)
        res.redirect("/")
    }
    static activate = (req,res) => {
        const taskId = req.params.id
        const allTasks = deal.readFromJson()
        const index = allTasks.findIndex(t=> t.id == taskId)
        if( index != -1 ) allTasks[index].status = true
        deal.writeToJson(allTasks)
        res.redirect("/")
    }
}

module.exports = Task