// function printProducts(products){
//     for(let item of products){
//         console.log(item.name + " costs " + item.price)
//     }
// }

type Products = {
    name : string
    price: number
}
function printProducts(products : Products[]){
    for(let item of products){
        console.log(item.name + " costs " + item.price)
    }
}
const products = [
 { name: "Laptop", price: 50000 },
 { name: "Phone", price: 20000 },
 { name: "Tablet", price: 30000 }
]
// printProducts(products)

/*
- Array type 
- ways 
    - Product[]
    - Array<Product>
*/



function printOrderId(orderId : number | string){
    // console.log("Order ID :" + orderId.toUpperCase())
    if(typeof orderId === "string"){
        console.log("OrderId : " +orderId.toUpperCase());
    }else{
        console.log("OrderID :" + orderId)
    }
}
// printOrderId(101)
// printOrderId("Ood102")



// function updateOrderStatus(status){
//     console.log("Order status updated to " + status)
// }
// updateOrderStatus("pending")
// updateOrderStatus("shipped")
// updateOrderStatus("banana")
// function updateOrderStatus(status : "pending" | "shipped" | "delivered"){
//     console.log("Order status updated to " + status)
// }
type orderStatus = "pending" | "shipped" | "delivered"
function updateOrderStatus(status : orderStatus){
    console.log("Order status updated to " + status)
}
updateOrderStatus("pending")
updateOrderStatus("shipped")
// updateOrderStatus("banana")