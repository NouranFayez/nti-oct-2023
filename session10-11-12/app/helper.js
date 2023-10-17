const fs = require("fs")
class helper{
    static resGenerator = (res, statusCode, apiStatus, data, message) =>{
        res.status(statusCode).send({ apiStatus, data, message })
    }
    static fileHandler = (req)=>{
        const ext = req.file.originalname.split(".").pop()
        const newFileName = req.file.path + "." + ext
        fs.renameSync(req.file.path, newFileName)
        return newFileName
    }
}
module.exports = helper