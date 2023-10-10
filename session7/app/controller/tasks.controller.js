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
        res.render("single", {
            pageTitle: "Single Task"
        })
    }
    static edit = (req,res) => {
        res.render("edit", {
            pageTitle: "Edit Task"
        })
    }
    static del = (req,res) => {
        res.send("del")
    }
    static activate = (req,res) => {
        res.send("activate")
    }
}

module.exports = Task