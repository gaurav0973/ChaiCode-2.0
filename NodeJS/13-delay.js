const start = Date.now();

setTimeout(() => {
    console.log("Delay:", Date.now() - start, "ms");
}, 0);
setImmediate(()=>{
    console.log("immediate")
})
// console.log("Ghaniya")