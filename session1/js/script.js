/// let - const - var

let num = 3
var num2 = 4
if (true) {
    let num = 20
    var num2 = 40

    var x = "string"
    let y = "string"
    //    console.log(num) // 20
    //    console.log(num2)
}

// console.log(x) 
// console.log(y)

// function add(){
//     let h = "text"
//     if(true){
//         h = 30
//         console.log(h)
//         let b = "hhhhh"
//     }
//     console.log(b)
// }

// add()
// console.log(k)
// var k = "JS"
// console.log(l)
// let l = "Advanced js"
// let str = "string"
// str = 30
// const courseName = "Js"
// courseName = "hvfdjd"

// console.log(courseName)


////////// Function 

// function statment 

// function add(){
//     // console.log('function statment')
//     return "function statment"
// }
// let addFunc = add()
// console.log(addFunc)

// let fName = prompt('enter your name')
// console.log(fName)

// function expression 

// let addFunc = function(){
//     console.log(this)
//     return 30 + 40
// }

// console.log(addFunc())

/// Arrow Function

// let add = (num1 , num2)=> num1 + num2

// let str = ()=>{
//     ///// logic
//     console.log(this)
//     return 'js'
// }

// console.log(add(100 , 20))
// console.log(str())


//////// Objects

// let user = {
//     fName : 'Nouran',
//     lName : 'Fayez',
//     age : 29,
//     fullNAme : function(){
//         console.log(arguments[0])
//         console.log(arguments[1])
//         console.log(arguments[2])
//         return  `${this.fName} ${this.lName}`
//     },
//     fullNAme2 : ()=>{
//         console.log(arguments[0])
//        return `${this.fName} ${this.lName}`
//     }
// }
// console.log(user.fullNAme(20 , 'text' , true))
// console.log(user.fullNAme2(100 , 'Js' , false))

// console.log(user.fName)
// console.log(user['fName'])

///////////////////////////// Array

let users = [
    {
        name: 'Nouran',
        age: 29
    },
    {
        name: 'Ahmed',
        age: 25
    },
    {
        name: 'Mai',
        age: 40
    },
]

users.push({
    name: "Marwa",
    age: 38
})

// console.log(users)


// users.pop()
// users.shift()

// console.log(users)
// for(let i = 0 ; i < users.length ; i++){
//     // console.log(users[i])
//     if(i == 1) continue
//     console.log(i)
// }


users.forEach((item , i , arr)=>{
    // if(i == 2) continue;
    // console.log(item)
    // console.log(i)
    // console.log(arr)
})


// function arrayItem(){

// }

///////////////////////////////////////////////////////////////////////////////////////////////////
/// menu ==> 1- chicken  2- fries  3-meat 4-cola  5 -cake  0-exit ==> prompt()
// const menu = ["Chicken" , "Meat" , "Fish" , "Fries" , "Cola" , "Cake"]

// let choices = "Enter Your Choice \n
//  0- exit
//  1- chicken 
//  2-fish 
// 3-cake \n "

// menu.forEach((item , i)=> choices+= ` ${i + 1} - ${item} \n`)

// for(let i = 0 ; i < menubar.length ; i++){
//     choices+= `${i + 1} ${menu[i]}`
// }

// console.log(choices)

// // prompt(choices)

// const userChoice = []
// let choice = null

// do {
//     choice = prompt(choices) // 1 - chicken ==> menu[0]
//     if(choice == 0 || choice == null) break 
//     if(choice > 0 && choice <= menu.length) userChoice.push(menu[choice-1])
//     else alert('invalid choice')
    
// } while (true);

// console.log(userChoice)
///////////////////////////////////////////////////////////////////////////////////////////////////


// let p = Number(prompt('Enter number 1'))
// let p = +prompt('Enter number 1')
// let p = parseInt(prompt('Enter number 1'))
// let p = parseFloat(prompt('Enter number 1'))
// console.log(p)
// console.log(typeof p)

// let e = 40

// console.log(isNaN(e))

//////////////////////////////////////////////////////////////////////////////////

const isValidOp = (op)=>{
    const operation = ["+" , "-" , "*" , "/"]
    if(operation.includes(op)) return true
    return false
}
console.log(isValidOp("+"))
// console.log(operation.includes('fkfkf'))
let number1 = Number(prompt('Enter number 1')) // 4
while(isNaN(number1)) number1 = Number(prompt('Enter a valid number'))

// logical operator ==> && || !
let op = prompt('Enter operation') // + , - , * , /
while(!isValidOp(op)) op = prompt('enter one of (+ , - , * ,)')

let number2 = Number(prompt('Enter Number 2')) // 10
while(isNaN(number2)) number2 = Number(prompt('Enter a valid number'))

switch(op){
    case "+" : console.log(number1 + number2) ; break;
    case "-" : console.log(number1 - number2) ; break;
    case "*" : console.log(number1 * number2) ; break;
    case "/" : console.log(number1 / number2) ; break;
    default : console.log("invalid operation")
}






//////////////////////////////////////////////////////////////////////////////////