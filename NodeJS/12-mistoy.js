setImmediate(()=>{
    console.log("immediate") //3
})
setTimeout(() => {
    console.log("timer : ", ) //2
}, 2*1000);

// console.log("end") //1