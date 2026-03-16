const fs = require("fs")

fs.readFile("ghaniya", 'utf-8', ()=>{
    console.log("File : 1") 
})

setTimeout(() => console.log('Timer : 1'), 0)
process.nextTick(()=>console.log("nextTick : 1")) 
Promise.resolve().then(()=>console.log("Promise : 1")) 

setImmediate(()=>{
    console.log("Immediate : 1") 
    setTimeout(()=> console.log("timer : 2"))
})

console.log('end'); 