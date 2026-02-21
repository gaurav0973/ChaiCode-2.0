


const nums = [1,2,3,5];


Array.prototype.myForEach = function(fn){

    //this = current context = nums
    let n = this.length;
    for(let i=0; i<n; i++){
        fn(this[i], i);
    }
}

nums.myForEach((num, idx)=>{
    console.log(`idx = ${idx} | number = ${num}`)
})

console.log()

const fruits = ["Apple", "Banana", "Mango"]
fruits.myForEach((fruit, idx)=>{
    console.log(`idx = ${idx} | number = ${fruit}`)
})