console.log("start") //1

setTimeout(()=>{
    console.log("timer : 1")  //6
    process.nextTick(()=>{
        console.log("nextTick : 1") //7
    })
}, 0)

console.log("middle")  //2

Promise.resolve().then(()=>{
    console.log("Promise : 1") //5
})
process.nextTick(()=>{
    console.log("nextTick : 2")  //4
})
console.log("end") //3