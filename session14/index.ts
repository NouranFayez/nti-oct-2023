// let x : number

// x = 5

// let x : number
// x = 5

//number boolean string object array tuple enum any never union 

// let y : string = "marwa radwan"
// y = "test"
// let z : boolean = true
// let w : any
// w="test"
// w=5
// w=15.2
// w=true

// let user : {name: string, age:number, status: boolean}
// user = {
//     name:"marwa",
//     age:38,
//     status: false
// }

// let allData : string[] =["a","3"]
// console.log(allData)


// let hello : (name:string) => string

// hello = (name) =>{
//     return name
// }

// let myFun = (name: string): string =>{
//     return name
// }

// myFun("marwa")

// function test(name: string):string{
//     return name
// }

// //tuple
// let emp1, emp2, emp3 : [ string, number, boolean ]

// let x : number | string
// x = 5
// x="marwa"


// //enum
// enum weekDays { sun, mon, tue, thr, wed, fri, sat }

// // console.log(weekDays.sun)

// function isWeekEnd (d: weekDays){
//     switch(d){ //switch(weekDays.sat)
//         case weekDays.fri:
//         case weekDays.sat:
//             console.log("weekend")
//             break
//         default:
//             console.log("is not a weekend")
//     }
// }

// isWeekEnd(6)

// function myFun(a: number,c?:number, b:number = 7): number{
//     return a
// }

// myFun(6,5)


// function printRes (...data: string[]){
//     console.log(data)
// }

// printRes("a","b", "c", "d")

/*
array users => { name, age: optional, email }
add user
show all users
*/

// // interface
// interface User{
//     name: string
//     age?: number
//     email: string
// }

// const allUsers : User[] = []

// const addNewUser = (u: User):void => {
//     allUsers.push(u)
//     console.log("inserted")
//     // return "hello"
// }

// const showAllUser = () : void=>{
//     allUsers.forEach(user=>{
//         console.log(`name: ${user.name} - age: ${user.age} - email: ${user.email}`)
//     })
// }

//classes
// class User{
//     readonly data : number
//     private id: number
//     private name: string
//     private age: number

//     constructor(data: number,id:number,name:string, age:number){
//         this.data=data
//         this.id = id
//         this.name = name
//         this.age = age
//     }
// }

//create instense (object)
// const u1 = new User(1,1, "marwa", 38)
// console.log(u1.name)
// class X{
//     name: string
//     constructor(name:string){
//         this.name = name
//     }
//     show(){
//         console.log(this)
//     }
// }

// class Y extends X{
//     age: number
//     constructor(name:string, age:number){
//         super(name)
//         this.age = age
//     }
// }

// //y => has name, age, show

// const u1 = new Y("marwa", 38)
// u1.show()

/*
user => name, age, email 
student =>  grades[] - add student, show students, add grade to student
teacher => subjects[] - add teacher, show teacher data,  add subjecct to teacher
 */

// interface Grade{
//     subjectName: string
//     degree: number
// }
// class User{
//     protected readonly id : number
//     protected name:string
//     protected age:number
//     protected email : string
//     constructor(name:string, age:number, email:string, id:number){
//         this.id = id
//         this.name = name 
//         this.age = age
//         this.email=email
//     }
//     showData(){
//         console.log(`id = ${this.id}`)
//         console.log(`name = ${this.name}`)
//         console.log(`age = ${this.age}`)
//         console.log(`email = ${this.email}`)
//     }
//     get _id() :number{ return this.id}
//     set _name(val: string){ this.name = val }
//     get _name(): string{return this.name}
// }
// class Teacher extends User{
//     private subjects:string[]
//     constructor(name:string, age:number, email:string, id:number, subjects: string[]=[]){
//         super(name,age,email, id)
//         this.subjects=subjects
//     }
//     addSubject(sub:string):void{
//         this.subjects.push(sub)
//     }
//     showData(){
//         super.showData()
//         console.log("user subjects: ")
//         this.subjects.forEach((s, i)=> console.log(`${i+1} - ${s}`))
//     }
// }
// class Student extends User{
//     private grades:Grade[]
//     constructor(name:string, age:number, email:string, id:number, grades: Grade[]=[]){
//         super(name,age,email, id)
//         this.grades = grades
//     }
//     addGrade(g:Grade){
//         this.grades.push(g)
//     }
//     showData(){
//         super.showData()
//         console.log("user grades: ")
//         this.grades.forEach((g, i)=> console.log(`${i+1} - ${g.subjectName} - ${g.degree}`))
//     }
// }

// class Emp{
//     static count: number = 0
//     constructor(){
//         ++Emp.count
//     }
//     static v(){
//         console.log("v")
//     }
// }

// const e1=new Emp()
// const e2=new Emp()

// console.log(Emp.count)
// Emp.v()

// abstract class base{
//     abstract add() : void
//     abstract show() : void
// }

// class User implements base{
//     add():void{}
//     show():void{}
// }


// interface , class , extends, types, functions