const nums = [1,2,3,5];


Array.prototype.myFind = function(fn){
    for(let i=0; i<this.length;i++){
        if(fn(this[i], i)){
           return this[i]; //element hi return karo
        }
    }
    return undefined;
}

console.log(nums.myFind((num) => num > 3));