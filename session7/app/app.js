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

const taskRoutes = require("./routes/tasks.routes")
app.use(taskRoutes)

module.exports = app