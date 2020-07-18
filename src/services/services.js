// const Cart = require("../models/Cart")
// require('../app');

// const createCart = (fastify,createCartRequest) =>{
//     if(!createCartRequest.size){
//         createCartRequest.size=null
//     }
//     if(!createCartRequest.color){
//         createCartRequest.color=null
//     }
//     const cart = {customerId: createCartRequest.customerId,
//                   productId: createCartRequest.productId,
//                   variantId: createCartRequest.variantId,
//                   productName: createCartRequest.productId,
//                   mainCategory: createCartRequest.mainCategory,
//                   subCategory: createCartRequest.subCategory,
//                   size: createCartRequest.size,
//                   color: createCartRequest.color,
//                   price: createCartRequest.price,
//                   quantity: createCartRequest.quantity} 
//     return cart
// }

// const deleteCartProduct = (fastify,deleteCartProduct) =>{
//     const cart = {customerId:deleteCartProduct.customerId , variantId:deleteCartProduct.variantId}
//     const sql = "DELETE FROM Cart WHERE customerId='"+cart.customerId+"' AND variantId='"+cart.variantId+"'"
//     return sql
// }

// module.exports ={
//     createCart,
//     deleteCartProduct
// }