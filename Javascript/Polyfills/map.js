const nums = [1,2,3,5];


Array.prototype.myMap = function(fn){
    let n = this.length;
    let ans = []
    for(let i=0; i<n; i++){
        ans.push(fn(this[i], i));
    }
    return ans;
}


const ans = nums.myMap(num => num*2)
// console.log(ans)

const inputs = ["    Gaurav", "Maurya ", "     Gaurav     Maurya    "]
const timmedInputs = inputs.myMap((input) => {
    return input.trim()
})
console.log(timmedInputs)