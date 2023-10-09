// nodemon  ==> npm i -g nodemon
// console.log("hello")
// console.log(process.argv)
// console.log(process.argv[3])
// node index 5 + 3   => 8
// node index 5 - 3   => 2
// node index 5 / 3   => 1.222
// node index 5 * 3   => 15

// switch(process.argv[3]){
//     case "+":
//         console.log( +process.argv[2] + +process.argv[4] );
//         break;
//     case "-":
//         console.log( +process.argv[2] - +process.argv[4] );
//         break
//     case "/":
//         console.log( +process.argv[2] / +process.argv[4] );
//         break
//     case "*":
//         console.log( +process.argv[2] * +process.argv[4] );
//         break
//     default:
//         console.log("invalid operation")
// }


// npm i yargs
const yargs = require("yargs")
yargs.command({
    command:"+",
    builder:{
        x:{
            type: 'number',
            demandOption: true
        },
        y:{
            type: 'number',
            demandOption: true
        }
    },
    handler: function(argv){
        console.log( argv.x+ argv.y )
    }
})
yargs.argv













