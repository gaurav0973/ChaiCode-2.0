/*
🌟1. => Simple object behaviour
    - let x = {}
    - x[key] or x.key
    - delete x.key
    - x.hasOwnProperty(key)
    - (key in x) => not a good method=> pure prototype me jata hai ye
*/

let obj = {
    name : "Gaurav",
    age: 22
}
// console.log("name" in obj)
// console.log("toString" in obj) 
// console.log(obj.hasOwnProperty("name"))
// console.log(obj.hasOwnProperty("toString"))



/*
🌟2. => Object se array
    - let x = {}
    - keysKaArray = Object.keys(x)
    - valuesKaArray = Object.values(x)
    - arrayOfArray = Object.entries(x) 
            - [[key1, value1], [key2, value2] ...]
            - jab bhi object par loop karna, use for..of loop 
*/
let user = {
    name : "Gaurav",
    age: 22,
    location:{
        village: "koiripur khurd",
        district: "Varanasi"
    }
}

let keys = Object.keys(user)
let values = Object.values(user)
let entries = Object.entries(user)
// console.log(keys)
// console.log(values)
// console.log(entries)


/*
🌟3. => arrays se object
    - let x = [[key1, value1], [key2, value2] ...]
    - obj = Object.fromEntries(x)
*/

// let arr = [['a', 1], ['b'], ['c', { village: 'koiripur khurd', district: 'Varanasi' }]]
// let arrToObj = Object.fromEntries(arr)
// console.log(typeof arrToObj)
// console.log(arrToObj)



/*
🌟4. => Some Interview gold
    - Object.freeze() => 
    - Object.seal() => allow only editing to existing property , no other stuffs 
*/

// let request = {
//     name : "gaurav",
//     location : "varanasi"
// }
// Object.seal(request)
// Object.freeze(request)
// request.location = "UP"
// delete request.name
// console.log(request)
