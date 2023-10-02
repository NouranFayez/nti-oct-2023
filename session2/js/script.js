///// Array Methods 

let numbers = [2 , 4, 8, 1, 4]

numbers.push(0  , 'html') // add item/s at the end of array
numbers.unshift(100)


numbers.pop() /// remove one item from the end of array
numbers.shift()

console.log(numbers.includes(true))

console.log(numbers.sort())

console.log(numbers.toString())
console.log(numbers.join("-"))


console.log(numbers)

numbers.forEach((item , i , arr)=>{
    // console.log(item)
    if(item > 2) console.log(item)
})

numbers.find(item => item > 1)
console.log(numbers.find(item => item > 1))
console.log(numbers.find(item => item > 100))

// let x = ()=> 'js'

let users = [
    {name : 'Nouran' , age : 29},
    {name : 'Marwa' , age : 38},
    {name : 'tamer' , age : 36},
    {name : 'Omar' , age : 7},
    {name : 'Mai' , age : 7},
]

let user =  users.find(item => item.age == 36)
/// wrong condition ==> undefined (find)
/// wrong condition ==> -1 (findIndex)
console.log(user)

let index = users.findIndex(item => item.age == 38)
console.log(index)

// users.splice(index , 2)

let newUser = {name : 'Mohamed' , age : 30}
let newUser2 = {name : 'Ahmed' , age : 30}
users.splice(index , 0 , newUser  , newUser2 )
console.log(users)

users[index].name = "Heba"


// let newUsers = users.filter(item => item.age == 7)
let newUsers = users.filter(item => item.age == 40)
console.log(newUsers)


// splice(index , deletedCount , item/s)  ==> remove - add 

// -- check array if empty or not 

if(newUsers.length == 0) users.push({name : "Ahmed" , age: 40})


let ids = [5 , 20 , 10]

let newIDs = ids.map(item => item*2)
console.log(ids)
console.log(newIDs)

let total = 0
let arr = ids.map((item)=>{
    total+= item
    return item*2
})

console.log(total)


// ()=>  "js"


// ()=>{
//     console.log('bla bla')
//     return "js"
// }

/////////////////////////////////////////////////////////////////////////

//// user ==> id (unique) , name , balance ==> object

// addUser() prompt() ==>  save in array 
// editUserBalanceById() ==> id , newBalance ==> prompt()
// deleteUserById() ==> id 

//////////////////////////////////////////////////////////////////////////




// localStorage.setItem('userId' , '3')
// console.log(JSON.stringify(users))// ==> javascript object notation 
// localStorage.setItem('users' , JSON.stringify(users))

// let localStorageData = JSON.parse(localStorage.getItem('users'))

// localStorageData.push({name:'Osama' , age : 3})
// console.log(localStorageData)


// sessionStorage.setItem('name' , 'Nouran')
// sessionStorage.setItem('id' , '3')

localStorage.removeItem('userId')
