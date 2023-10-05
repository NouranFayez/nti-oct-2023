/*
build in modules , methods, variables
my own modules
npm
*/

// const os = require('node:os');
// console.log(os.freemem())

// const fs = require("fs")
// fs.writeFileSync("marwa.txt", "hello world")

// console.log(__dirname)
// console.log(__filename)
// const myMod = require("./myModules/f1") //{test:fn, test1:fn}

// myMod.test()
// myMod.test1()

// const user = require("./myModules/users")
// user.add()

// const validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true

// import users from "./myModules/users.js"
// users.add()

// import validator from 'validator';
// console.log(validator.isEmail("test"))


import users from "./myModules/users.js"
// users.add("marwa", 38, "marwa@techs.com")
// users.showAll()
users.single(169650383137)

