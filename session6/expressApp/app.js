/*
npm init --y
npm i -g nodemon
npm i express
hbs
npm i hbs
*/
const express = require("express")
const path = require("path")
const app = express()

const staticFiles = path.join(__dirname, "html")
// console.log(staticFiles)
app.use( express.static(staticFiles) )
app.set('view engine', 'hbs')

app.get("/", (req,res)=>{
    res.render("home", {
        session: "session 6",
        subject: "nodeJs"
    })
})


// app.get("/", (req, res)=>{
//     res.send("Hello World!")
// })
// app.get("/admin", (req,res)=>{
//     res.send("<h3>Admin</h3>")
// })
// app.get("/json", (req,res)=>{
//     res.send({a:1, b:2})
// })
// app.get("/img", (req,res)=>{
//     res.sendFile(`${__dirname}/img/sta.jpg`)
// })
app.listen(3000, ()=> console.log(`http://localhost:3000`))
