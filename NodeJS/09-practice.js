// setImmediate()

const fs = require("fs")

setTimeout(() => console.log('timer : 1'), 0)  //2
setImmediate(() => console.log('Immediate')) //4

fs.readFile('ghaniya.txt', 'utf-8', ()=> console.log("File : 1"))  //3

console.log('end') //1