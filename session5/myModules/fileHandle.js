import * as fs from 'fs';
export default class handleJson{
    static readFromJSON(fileName="users.json"){
        let result
        try{
            result = JSON.parse(fs.readFileSync(fileName))
        }
        catch(e){
            result = []
        } 
        return result
    }
    static writeToJson(data, fileName="users.json"){
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
}