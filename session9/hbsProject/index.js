require('dotenv').config()
const app = require("./app/app")
require("./models/dbConnection")
const PORT = process.env.PORT
app.listen( PORT, () => console.log(`http://localhost:${PORT}`))