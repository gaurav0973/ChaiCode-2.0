
//1. Copy by reference 
let originalObj = {
    name : "maurya"
}
let copiedObj = originalObj
copiedObj.name = "gaurav"
// console.log(originalObj)


//2. shallow copy
let original = {
    name : "maurya",
    address : {
        state : "Uttar Pradesh",
        district : "Varanasi"
    }
}
let shallowCopy = {...original};


// shallowCopy.name = "gaurav";
// console.log("Original : ", original)
// console.log("Copied : ",shallowCopy)


// shallowCopy.address.state = "UP"
// console.log("Original : ", original)
// console.log("Copied : ",shallowCopy)


// 3. deep copy
let obj =  {
    name : "maurya",
    address : {
        state : "Uttar Pradesh",
        district : "Varanasi"
    }
}
let deepCopy = structuredClone(obj);

// deepCopy.name = "gaurav";
// console.log("Original : ", obj)
// console.log("Copied : ",deepCopy)


// deepCopy.address.state = "UP"
// console.log("Original : ", obj)
// console.log("Copied : ",deepCopy)


// Array 

// 1. copy by reference
let arr = [1, 4 , 5];
let copyArr = arr;
// copyArr.push(6);
// console.log("Original : ", arr)
// console.log("Copied : ",copyArr)


// 2. shallow copy
let nums = [1,2, [3,4], 6]
let copyNums = [...nums]


// copyNums.push(7);
// console.log("Original : ", nums)
// console.log("Copied : ",copyNums)


// copyNums[2].push(5)
// console.log("Original : ", nums)
// console.log("Copied : ",copyNums)

// 2. deep copy
let array = [1,2, [3,4], 6]
let copyArray = structuredClone(array)


// copyArray.push(7);
// console.log("Original : ", array)
// console.log("Copied : ",copyArray)


// copyArray[2].push(5)
// console.log("Original : ", array)
// console.log("Copied : ",copyArray)