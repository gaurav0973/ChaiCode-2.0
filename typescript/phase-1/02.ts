// function printProduct(product){
//     console.log(product.name + " costs " + product.price)
// }
// printProduct({
//    name: "Laptop",
//    price: 50000,
//    inStock: true
// })


// function printProduct(product : {name : string, price : number, inStock: boolean}){
//     console.log(product.name + " costs " + product.price)
// }
type Product = {
   name: string
   price: number
   inStock: boolean
   nickname?: string
}
function printProduct(product : Product){
    console.log(product.name + " costs " + product.price)
    console.log(product.nickname?.toUpperCase())
}
printProduct({
   name: "Laptop",
   price: 50000,
   inStock: true
})
// printProduct({
//    name: "Laptop",
//    cost: 50000,  // -------> error during compile time itself
//    inStock: true
// })

/*
- Obect type annotation
- Type aliase
- Optional Property
- Optional Chaining
*/


