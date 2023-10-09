const yargs = require("yargs")
const users = require( "./myModules/users.js")
// users.add("marwa", 38, "marwa@techs.com")
// users.showAll()
// users.single(169650383137)
yargs.command({
    command:"addUser",
    builder:{
        name:{
            type:"string",
            demandOption:true
        },
        age:{
            type:"number"
        },
        email:{
            type:"string",
            demandOption:true
        },
        status:{
            type:"boolean",
            default: false
        }
    },
    handler:function(argv){
        users.add(argv)
    }
})

yargs.command({
    command: "showAll",
    handler: function(){
        users.showAll()
    }
})


yargs.argv