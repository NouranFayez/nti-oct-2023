// // nodemon  ==> npm i -g nodemon
// // console.log("hello")
// // console.log(process.argv)
// // console.log(process.argv[3])
// // node index 5 + 3   => 8
// // node index 5 - 3   => 2
// // node index 5 / 3   => 1.222
// // node index 5 * 3   => 15
// // switch(process.argv[3]){
// //     case "+":
// //         console.log( +process.argv[2] + +process.argv[4] );
// //         break;
// //     case "-":
// //         console.log( +process.argv[2] - +process.argv[4] );
// //         break
// //     case "/":
// //         console.log( +process.argv[2] / +process.argv[4] );
// //         break
// //     case "*":
// //         console.log( +process.argv[2] * +process.argv[4] );
// //         break
// //     default:
// //         console.log("invalid operation")
// // }


// // npm i yargs
// const yargs = require("yargs")
// yargs.command({
//     command:"+",
//     builder:{
//         x:{
//             type: 'number',
//             demandOption: true
//         },
//         y:{
//             type: 'number',
//             demandOption: true
//         }
//     },
//     handler: function(argv){
//         console.log( argv.x+ argv.y )
//     }
// })
// yargs.argv

// no packages => http https http2 http2s

const http = require("https")
const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=10"

const req = http.request(apiUrl, (res)=>{
    let allRes=""
    res.on('data', (d)=>{
        allRes += d.toString()
    })
    res.on("end", ()=> console.log(JSON.parse(allRes)))
})

req.on('error', (err)=> console.log(err))
req.end()




















