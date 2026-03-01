// console.log(Array)
// console.log(Object)
// console.log(Function)
// console.log(Number)


// console.log(Array.prototype)
// console.log(Object.prototype)
// console.log(Function.prototype)
// console.log(String.prototype)

// console.log(Array.__proto__)
// console.log(Object.__proto__)
// console.log(Function.__proto__)
// console.log(String.__proto__)

// console.log(Array.prototype == Array.__proto__)
// console.log(Object.prototype == Object.__proto__)
// console.log(Function.prototype == Function.__proto__)
// console.log(Number.prototype == Number.__proto__)


class Maurya{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // console.log(this)
    greet(){
        console.log(`Myself ${this.name} and I am ${this.age} years old`);
    }
}

console.dir(Maurya)

const gaurav = new Maurya("Gaurav", 22);

// console.log(Maurya)   // class
// console.log(Maurya.__proto__)  // no idea abhi tk - mujhe
// console.log(Maurya.__proto__.__proto__) // object
// console.log(Maurya.__proto__.__proto__.__proto__) //null

// console.log(Maurya.prototype)
// console.log(Maurya.prototype.prototype)
// console.log(Maurya.prototype.__proto__)


