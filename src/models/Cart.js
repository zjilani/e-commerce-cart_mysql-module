// const mongoose = require('mongoose');

// require('../app');
let sql = 'CREATE TABLE Cart(customerId VARCHAR(255),mainCategory VARCHAR(255),subCategory VARCHAR(255),productId VARCHAR(255),variantId VARCHAR(255),productName VARCHAR(255),size VARCHAR(255),color VARCHAR(255),price INT(20),quantity INT(20))';
 db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });

// const cartSchema = new mongoose.Schema({
//     customerId:{
//         type:String,
//         required:true
//     },
//     mainCategory:{
//         type:String,
//         enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
//         required:true
//     },
//     subCategory:{
//         type:String,
//         required:true
//     },
//     variantId:{
//         type: String,
//         required: true
//     },
//     productId:{
//         type: String,
//         required: true,
//     },
//     productName:{
//         type: String,
//         required: true
//     },
//     color: {
//         type:String,
//     },
//     price: {
//         type:Number,
//         required: true
//     },
//     size: {
//         type:String
//     },
//     quantity:{
//         type:Number,
//         required:true
//     }

// });

// const Cart= mongoose.model('Cart', cartSchema);

module.exports = Cart;