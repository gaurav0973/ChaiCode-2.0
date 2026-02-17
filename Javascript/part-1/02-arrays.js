/*
🌟1 =>Array Methods
- Mutate(same aray me change) the array 
        - push()
        - pop()
        - shift()
        - unshift()
        - splice(startIdx, numberOfItemsToRemove=0, itemsToAdd)
            - Note : returns the deleted element
            - delete/insert/replace item
            - second parameter 0 dena hoga => insert
            - arr.splice(2) => delete everything from idx = 2
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 2);
// console.log(fruits)

fruits.splice(2, 0, "Orange" );
// console.log(fruits)


/*
🌟2. => Array Methods
- Non-mutate(return new array)
        - concat()
        - flat()
        - flatMap()
        - slice(startIdx, endIdx not-included)
*/

//ℹ️Interviews : shallow copy hai, not deep copy
// let arr = [1,2,3];
// let copy = arr.slice();
// console.log(copy);


//ℹ️Interviews
// arr = [1,2,3,4,5];
// let x = arr.slice(1,4);
// let y = arr.splice(1,4);

// console.log(x);
// console.log(y);
// console.log(arr);


/*
🌟3. => Searching
    - indexOf() : first occurance
    - includes()
    - find()  : returns first eleemt that satisfies confition
    - findIndex()
*/

//💗Trap => Because objects compare by reference, not value.
// let arr = [{a:1}];
// console.log(arr.indexOf({a:1})); //-1

//💗Trap
let arr = [NaN];
console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN))


/*
🌟4. => higher order function
        - forEach() : kuch return nahi karta
        - map() : returns array of same length
        - filter() : return array which follows the condition
        - reduce() : return anything number/array/object/anything
        - sort() : by default convert to string, uske baad sort karta hai, so pass fn 
                - arr.sort((a,b) => a-b) => increasing
        - toSorted()
*/

/*💗Trap
forEach cannot be stopped midway
  - Once started → runs for all elements
  - I cannot break/continue
  - async call bhi nahi kar sakta
*/


// nums = [1,3,4,5,7]
// nums.forEach((num)=>{
//     if(num == 5)
//         continue;
//     console.log(num)
//     return
// })

