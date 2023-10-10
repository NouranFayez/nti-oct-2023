class Task{
    static add = (req,res) => {
        res.render("add", {
            pageTitle: "Add Task"
        })
    }
    static showAll = (req,res) => {
        res.render("all", {
            pageTitle: "All Tasks"
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