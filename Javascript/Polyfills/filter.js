const nums = [1,2,3,5];


Array.prototype.myFilter = function(fn){
    let ans = []
    for(let i=0; i<this.length; i++){
        let condition = fn(this[i], i);
        if(condition == true)
            ans.push(this[i]);
    }
    return ans;
}

const ans = nums.myFilter((num, idx) => {
    return num%2 == 0
})
console.log(ans)