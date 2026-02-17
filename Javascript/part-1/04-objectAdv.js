const x = {
    name : "gaurav"
}

// adding property + having control over them
Object.defineProperty(x, "age", {
    value : 22,
    writable:false,
    enumerable:true,
    configurable:false,
})
/*
- writable => value change ho sakti hai ya nahi 
- enumerable => loop ne nahi dikhega, Object.keys(x) me nahi dikhega 
- configurable => dubara modefy/delete nahi kar sakte
*/
// console.log(x.age)

console.log(x) // enumarable false hai => vo age nahi dekh paa raha , true karne par dikhega 
// 2. How to check for the properties
const nameDesc = Object.getOwnPropertyDescriptor(x, "name")
console.log(nameDesc)
const ageDesc = Object.getOwnPropertyDescriptor(x, "age")
console.log(ageDesc)