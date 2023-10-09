const handleJson = require("./fileHandle.js")
const validator = require("validator")
const chalk = require("chalk")
class User{
    static add(name, age, email){
        try{
            if( !validator.isEmail(email) ) throw new Error("invalid email format")
            const user = { id: Date.now(), name,age, email }
            const allUsers = handleJson.readFromJSON()

            const userIndex = allUsers.findIndex(u=> u.name == name)
            
            if(userIndex != -1) throw new Error("name used before")

            allUsers.push(user)
            handleJson.writeToJson(allUsers)
            console.log(chalk.green("data added"))
        }
        catch(e){
            console.log(chalk.red(e.message))
        }
    }
    static showAll(){
        const allUser = handleJson.readFromJSON()
        if(allUser.length == 0) 
            return console.log(chalk.red("no users yet"))
        allUser.forEach(user => {
            console.log(chalk.green(`${user.id} - ${user.name} - ${user.age} - ${user.email}`))            
        });
    }
    static single(id){
        const allUser = handleJson.readFromJSON()
        const index = allUser.find(u=> u.id==id) 
        if(!index) console.log(chalk.red("user not found"))
        else console.log(chalk.green(index.name))
    }
    static edit(){
        console.log("edit")
    }
    static delete(){
        console.log("delete")
    }
}
module.exports=User