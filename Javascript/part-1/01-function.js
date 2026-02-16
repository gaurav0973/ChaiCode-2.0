/*
🌟Arrow function
1. does not own this
2. no argument object => normal function me samajh aayega
*/

const x = ()=>{
    console.log(`Hello ${this}`)
    console.log(typeof this)
    // console.log("Arguments : ", arguments)
}
// x()


/*
🌟Normal function
1. argument object => Let's talk about this
*/
function normal(){
    console.log(this)
    console.log(typeof this)
    console.log("Kya haal hai ...");
}
// normal();
function argumentObject(){
    console.log("Arguments : ", arguments);
    console.log(`Is Array : ${Array.isArray(arguments)}`);
    console.log(`Type of arguments : ${typeof arguments}`);

    console.log("Arguments object : ", arguments)
    // let {"0", "1"} = arguments => why ? 
    // let { key : variable } = object 
    // - key and value same ho jati hai => so sorthand
    // - number se variable start nahi hota , so this is giving error 
    let { 0: first, 1: second } = arguments;
    console.log("First value : ", first);
    console.log("Second value : ", second);

    let argsArray = Array.from(arguments);
    console.log("Argument array : ",argsArray)
    console.log("First value : ", argsArray[0]);
    console.log("Second value : ", argsArray[1]);
}
// argumentObject("Gaurav", "Maurya")


/*
🌟Higher order Function
A function that 
    - returns a function or
    - takes other functions as arguments
*/
function hi() {
  return "Hello, ";
}
function greeting(fn, name) {
  console.log(fn() + name);
}
// greeting(hi, "JavaScript!");

function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
// const h = sayHello();
// h()
// sayHello()()

// IIFE
const potions = (function(){
    let count = 0;  //Kya isko bahar access kar sakta hu?? => nahi! 
    return {
        increse(){
            count++;
            return count;
        },
        decrease(){
            count--;
            return count;
        }
    }
})()
console.log("Potions : ", potions);
console.log("Count : ", potions.count) // => Iski kahani closure me samajh aayegi 
console.log("Count : ", potions.increse())
console.log("Count : ", potions.increse())
console.log("Count : ", potions.increse())
console.log("Count : ", potions.increse())
console.log("Count : ", potions.decrease())


/*
Fancy names 
- Pure function => sab kuch function ke andar hi ho
- Impure function => kuch cheeje function ke bahar le le lu mai
- SideEffect = > impure function me jo cheeje bahar se le raha, vo sideeffect hai
*/







