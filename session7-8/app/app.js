const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()
// const staticDir = path.join(__dirname, "../frontend/public")
// const viewsDir = path.join(__dirname, "../frontend/views")
// const layoutsDir = path.join(__dirname, "../frontend/layouts")

app.use( express.static(path.join(__dirname, "../frontend/public")) )
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, "../frontend/views"))
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"))

app.use(express.urlencoded({ extended :true }))

const taskRoutes = require("./routes/tasks.routes")
app.use(taskRoutes)

app.all("*", (req,res)=>{
    res.render("err404", {
        pageTitle:"page not found",
        message : "request for invalid url"
    })
})

module.exports = app