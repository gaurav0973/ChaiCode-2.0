const fs = require("fs")

console.log("start") //1

fs.readFile("ghaniya.tsx", 'utf-8', ()=>{
    console.log("Reading about ghaniya")  //4
})

setTimeout(()=>console.log("Timer : async"), 0) //3

console.log("end") //2
