const nums = [1,2,3,5];



Array.prototype.myReduce = function(fn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = fn(acc, this[i]);
    }
    return acc;
};

const ans = nums.myReduce((acc,num)=>acc + num, 0)
console.log(ans)