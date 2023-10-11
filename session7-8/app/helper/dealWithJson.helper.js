const fs = require("fs")
fileName = "models/task.json"
class Deal{
    static writeToJson = (data) =>{
        if(!fs.existsSync("models")) fs.mkdirSync("models")
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    static readFromJson = () =>{
        let allTasks 
        try{
            allTasks = JSON.parse(fs.readFileSync(fileName))
            if( !Array.isArray(allTasks) ) throw new Error("not array") 
        }
        catch(e){
            allTasks = []
        }
        return allTasks;
    }
}

module.exports = Deal