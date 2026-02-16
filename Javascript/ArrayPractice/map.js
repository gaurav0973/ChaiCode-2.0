
let arr = [1,2,3]
// 1. double number
const doubleNum = arr.map((num) => {
    let x  = num*2;
    return x;
})
// console.log(doubleNum);

// 2. Square number 
const squareNumber = arr.map((num) => {
    let x  = num*num;
    return x;
})
// console.log(squareNumber);

// 3. convert to string
const arrNumtoStr = arr.map((num) => {
   return String(num);
})
// console.log(arrNumtoStr);

// 4. Capitalize names
let nums = ["rahul","aman"];
const capatalisedName = nums.map((name, idx)=>{
    return name.charAt(0).toUpperCase() + name.slice(1);
})
// console.log(capatalisedName)

// 5 Extract name 
nums = [{name:"A"},{name:"B"}]
const names = nums.map((item) => {
    return item.name;
})
// console.log(names);


// 6. convert to object formate
nums = ["A","B"]
const objectFormate = nums.map((ch)=>{
    return {
        name : ch
    }
})
// console.log(objectFormate);

// 7. length of each words
nums = ["apple","banana"] ;
const lengthOfEachWords = nums.map((item) => item.length);
// console.log(lengthOfEachWords);

// 8. Add id to each element

nums = ["A","B","C"];
const numsWithId = nums.map((item, idx) => {
    return {id : idx+1, name: item}
});
// console.log(numsWithId);

// 9. formate currency
nums = [100,250];
let currFormate = nums.map((num) => {
    return `Rs.${num}`;
})
// console.log(currFormate);


// 10. nested array sum per row
nums = [[1,2],[3,4]];
const nestedSum = nums.map((item) => {
    return item.reduce((acc, x)=> acc + x, 0);
})
// console.log(nestedSum);


nums = {name:"rahul",age:22};
let x = nums.map()