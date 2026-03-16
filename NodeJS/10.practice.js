const fs = require("fs")

setTimeout(() => console.log('Timer : 1'), 0) //2
setImmediate(() => console.log('Immediate : 1'), 0) //4

fs.readFile('ghaniya.txt', 'utf-8',()=> {
    console.log(`File : 1`) //3

    setTimeout(() => console.log('Timer : 2 '), 0); //6 
    setTimeout(() => console.log('Timeer : 3'), 0); //7
    setImmediate(() => console.log('Immediate : 2'), 0); //5
});

console.log('end'); //1
