/*
nest
static, getter, setter, constructor, inhertance
***************************************************
user => first name, last name, age, email, id
student => grades
teacher => subjects
add student
add teacher
get full name
get teacher/student by id
get count of students/ teachers
add subject to teacher
add grade to student
show all students/ teachers
*/
class User{
    constructor(fName, lName, age, email, id){
        this.fName = fName
        this.lName = lName
        this.age = age
        this.email = email
        this.id = id
    }
    set firstName(val){
        this.fName = val
    }

}
class Student extends User{
    constructor(fName, lName, age, email, id=Date.now(), grades=[]){
        super(fName, lName, age, email, id)
        this.grades = grades
    }
    getFullName(){
        return `${this.fName} ${this.lName}`
    }
    get name(){
        return `${this.fName} ${this.lName}`
    }
    set firstName(val){
        // throw new Error("invalid")
        this.fName = val
    }

    show(){
        console.log("Student")
    }
}
class Teacher extends Student{
    constructor(fName, lName, age, email, id=Date.now(), subjects=[]){
        super(fName, lName, age, email, id)
        this.subjects = subjects
    }
    show(){
        console.log("Teacher")
    }

}
// const allStudent = []
const s1 = new Student("marwa", "radwan", 38, "marwa@techs.com")
// console.log(s1.getFullName())
// allStudent.push(s1)
s1.firstName = "mohammed"
console.log(s1.name)
const t1= new Teacher("marwa", "radwan", 38, "marwa@techs.com")

const test = (obj) => {
    obj.show()
}
test(s1)
test(t1)

