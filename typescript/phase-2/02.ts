// function getFirstElement(arr){
//     if(arr.length === 0)
//         return null
//     return arr[0];
// }

// console.log(getFirstElement([1,2,3]))
// console.log(getFirstElement(["a","b","c"]))

// function getFirstElement<T>(arr : T[]) : T | null{
//     if(arr.length === 0)
//         return null
//     return arr[0];
// }

// console.log(getFirstElement([1,2,3]))
// console.log(getFirstElement(["a","b","c"]))





// function retrunsArray<T>(something : T) : [T]{
//     return [something]
// }
// console.log(retrunsArray(1))
// console.log(retrunsArray({name :"Gaurav"}))
// console.log(retrunsArray([2,5,7,8]))
// console.log(retrunsArray("maurya"))







// interface ApiResponse<T> {
//   success: boolean;
//   data: T;
// }

// function createResponse<T>(data : T): ApiResponse<T> {
//   return {
//     success: true,
//     data: data,
//   };
// }

// console.log(createResponse({ name: "Gaurav" }));
// console.log(createResponse([1, 2, 3]));








function getLength<T extends {length : number}>(value : T): number{
    return value.length
}
console.log(getLength("hello"))
console.log(getLength([1,2,3,4]))
console.log(getLength(4))

