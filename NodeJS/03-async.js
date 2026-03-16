const fs = require("fs")

console.log("start: TL")

fs.readFile("ghaniya.txt", 'utf-8', (error, data) =>{
    console.log("Ghaniya is my main thread")
})

console.log("end : TL")