
// fetch(apiUrl)
// .then( res => {
    //     res.json()
    //     .then(result=> console.log(result))
    // })
    // .catch( (e) => { 
        //     console.log(e);
        // })
        
// const apiUrl = "https://jsonplaceholder.typicode.com/photos"
// const runner = async(cb) =>{
//     try{
//         // const res = await fetch(apiUrl)
//         // const result = await res.json()
//         const result = await (await fetch(apiUrl)).json()
//         console.log(result)
//         cb( null, result )
//     }
//     catch(e){
//         cb(e, null)
//     }
// }
// runner( (err, res)=>{
//     if(err) return console.log(err)
//     console.log(res)
// })

// const baseUrl = "https://jsonplaceholder.typicode.com/"
// const btns = ["users", "posts", "todos", "photos"]
// const btnWrap = document.querySelector("#btnWrap")
// const data = document.querySelector("#data")
// btns.forEach(btn=>{
//     let myBtn = document.createElement("button")
//     myBtn.textContent= btn
//     btnWrap.appendChild(myBtn)
//     myBtn.addEventListener("click", async()=>{
//         data.innerHTML=""
//         const res  = await fetch(`${baseUrl}${btn}`)
//         const result = await res.json()
//         result.forEach(item=>{
//             const div = document.createElement("div")
//             data.appendChild(div)
//             for (const key in item) {
//                 const p = document.createElement("p")
//                 p.innerText= `${key}: ${item[key]}`
//                 div.appendChild(p)
//                 // console.log(`${key}: ${item[key]}`);
//             }
//         })
//     })
// })

// constructor function
// const user = function(name, age, email){
//     this.name = name
//     this.age = age
//     this.email = email
// }
// //prototype
// user.prototype.showData = function(){
//     console.log(this.name)
//     console.log(this.age);
// }
// const u1 = new user("marwa", 38, "marwa@techsexperts.com")
// console.log(u1)
// u1.showData()

class User{
    constructor(name, age, email){
        this.name = name
        this.age=age
        this.email=email
    }
    showData(){
        console.log(`Name: ${this.name} Age:${this.age} Email: ${this.email}`)
    }
}
















