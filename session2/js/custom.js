console.log(JSON.parse(localStorage.getItem('users')))


document.getElementById('custom_id')
document.getElementsByClassName('div_class')
document.getElementsByTagName('div')

let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

// function handleClick(){

// }

let registerForm = document.getElementById('register_form')
let btn = document.getElementById('btn')



registerForm.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(e)
    console.log(e.target.elements.userEmail.value)
    console.log(e.target.elements.userName.value)
    console.log(e.target.elements.userPassword.value)

    // let user = {
    //     Fname : 'Nouran',
    //     age:29
    // }
    
    // console.log(user['age'])

    // user['address'] = 'nasr city'

    // console.log(user)

    let user = {}

    const heads = ["userName" , "userEmail" , "userPassword" , "userPhone"]
    heads.forEach(item=>{
        user[item] = e.target.elements[item].value
    })
    console.log(user)
})

// registerForm.addEventListener('input' , function(e){
//     console.log(e)
// })


let wrapDiv = document.getElementById('wrap')


let h2 = document.createElement("h2")
h2.innerText = "Javascript"
h2.classList.add('text-danger' , 'bg-light' , 'p-4' , 'active')
// h2.classList.remove('bg-light')
h2.classList.toggle('active')
let p = document.createElement('p')
p.innerText = "Node Js"
wrapDiv.append(h2)
wrapDiv.prepend(p)

console.log(h2)


