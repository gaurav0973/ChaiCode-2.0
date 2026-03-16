
console.log("Ghaniya : start") //1

Promise.resolve().then(()=>{
    console.log("Promise : MQ") //4
})
process.nextTick(()=>{
    console.log("nextTick") //3
})

console.log("end") //2

//upar-niche