import * as fs from 'fs';
// fs.writeFileSync("a.txt", "hi all")

// const result = fs.readFileSync("a.txt")
// console.log(result.toString());

// const data = [{name:"marwa"}, {name:"omar"}]
// fs.writeFileSync("all.json",JSON.stringify(data))
const res = fs.readFileSync("all.json")
console.log(JSON.parse(res))
