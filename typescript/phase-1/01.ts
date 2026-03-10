function calculateTotal(price:number, tax:number) :number{
    return price + tax;
}
console.log(calculateTotal(100, 20))
// calculateTotal("100", 20)

/*
- Type annotation
- Type inference
- static type checking
*/

let price : number = 100;
let discount:number = 40;
function applyDiscount(price:number, discount:number): number{
    const finalPrice = price - discount;
    return finalPrice;
}
console.log(applyDiscount(100,40));
// console.log(applyDiscount("100", 40));

