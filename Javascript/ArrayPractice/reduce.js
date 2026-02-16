let nums = [1,2,3,4];

// 🌻Basics

//1. Sum of numbers
let totalSum = nums.reduce((acc, num) => {
    acc = acc + num;
    return acc;
}, 0)
// console.log(totalSum); 

//2. Product of numbers
let prod = nums.reduce((acc, num) => acc*num, 1);
// console.log(prod)

//3. find max
let maxNum = nums.reduce((acc, num)=> {
    if(num > acc)
        return num;
    return acc;
}, -Infinity);
// console.log(maxNum);

//4. find min
let minNum = nums.reduce((acc, num)=> {
    if(num < acc)
        return num;
    return acc;
}, Infinity);
// console.log(minNum);

// Count total elements (without using length)
let cntLength = nums.reduce((acc, num) => ++acc, 0)
// console.log(cntLength);



// ⭐ Medium level 
nums = [1,2,3,4,6];

// 1. cnt evem numbers 
let evenCnt = nums.reduce((acc, num)=> {
    if(num%2 === 0)
        acc++;
    return acc;
}, 0)
// console.log(evenCnt);


nums = [-2,3,4,-1,5];
// 2. sum of only positive numbers
let positiveSum = nums.reduce((acc, num)=> {
    if(num > 0)
       acc += num;
    return acc;
}, 0)
// console.log(positiveSum);

// 3. flatten array 
nums = [[1,2],[3,4],[5]];
let flattenArray = nums.reduce((acc, item)=> {
    for(let num of item){
        acc.push(num);
    }
    return acc;
}, [])
// console.log(flattenArray);

nums = ["a","b","a","c","b","a"];
// 4. frequency counter
let f = nums.reduce((acc, ch)=> {
    acc[ch] = acc[ch] ? acc[ch] + 1 : 1;
    return acc;
}, {})
// console.log(f);


nums = [1,2,3,4];
// 5. group number even/odd
// 🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻
let grouped = nums.reduce((acc, num)=> {
    let key = num%2 === 0 ? "even" : "odd"
    acc[key] = acc[key] ? [...acc[key], num] : [num];
    return acc;
}, {})
// console.log(grouped);


//⭐ ADVANCED
nums = [10,20,30] ;
// ,m1 => sum using reduce => sum/nums.length
let avg = nums.reduce((acc, num, idx, arr) => {
    acc += num;
    if(idx === arr.length -1)
        return acc/arr.length;
    return acc;
}, 0);
// console.log(avg)


//2. arrray to object
nums = [{id:1,name:"A"},{id:2,name:"B"}];
let obj = nums.reduce((acc, item)=>{
    acc[item.id] = {};
    return acc;
}, {})
// console.log(obj)

// 3. find second larget number
nums = [2,4,6,4,9];
let result = nums.reduce((acc, num) => {
    let [largest, secondLargest] = acc;
    if (num > largest) {
        return [num, largest];
    } else if (num > secondLargest && num < largest) {
        return [largest, num];
    }
    return [largest, secondLargest];
}, [-Infinity, -Infinity]);

// console.log(result[1]);

// 4. merge cart total price 
const cart = [{price:100,qty:2},{price:50,qty:3}];
const totalPrice = cart.reduce((acc, item) => acc + item.price*item.qty, 0);
// console.log(totalPrice);


//5. Build role count object
users=[
 {name:"A",role:"admin"},
 {name:"B",role:"user"},
 {name:"C",role:"admin"}
]
const roleCount = users.reduce((acc, item)=>{
    acc[item.role] =  (acc[item.role] || 0) + 1;
    return acc;
}, {});
console.log(roleCount);
