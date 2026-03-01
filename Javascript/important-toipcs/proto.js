// 1. __proto__

// const baseUser = {
//   role: "student",
//   login() {
//     console.log(`${this.name} logged in`);
//   },
//   institute: "Galgotia",

// };

// const user1 = {
//   name: "Gaurav",
// };

// console.log("User1 : ", user1.name)
// console.log(user1.role)




const baseUser = {
  role: "student",
  login() {
    console.log(`${this.name} logged in`);
  },
  institute: "Galgotia",

};

const user1 = {
  name: "Gaurav",
  __proto__ : baseUser
};

// console.log("User1 : ", user1.name)
// console.log("Role of user : ", user1.role)
// user1.login()
// console.log("Institute : ", user1.institute)
// console.log("User1 ka proto : ", user1.__proto__)
// console.log("BaseUser ka ka proto : ", baseUser.__proto__)
// console.log("BaseUser ka  proto(object) ka proto : ", baseUser.__proto__.__proto__)


//2. prototype 
class Maurya{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Myself ${this.name} and I am ${this.age} years old`);
    }
}

const gaurav = new Maurya("Gaurav", 22)
console.log(gaurav)
console.log(gaurav.__proto__ === Maurya.prototype) 