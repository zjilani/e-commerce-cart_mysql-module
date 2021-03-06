const HttpError = require('../models/errors/httpError')
const axios = require('axios')
// Create a new folder in Documer Service
const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'TEST'
});
db.connect();
exports.createCartTable= (req,res) => {
    let sql = 'CREATE TABLE Cart(customerId VARCHAR(255) NOT NULL,'+
                                 'mainCategory VARCHAR(255) NOT NULL,'+
                                 'subCategory VARCHAR(255) NOT NULL,'+
                                 'productId VARCHAR(255) NOT NULL,'+
                                 'variantId VARCHAR(255) NOT NULL,'+
                                 'productName VARCHAR(255) NOT NULL,'+
                                 'size VARCHAR(255),'+
                                 'color VARCHAR(255),'+
                                 'price INT(20) NOT NULL,'+
                                 'quantityToBuy INT(20) NOT NULL DEFAULT 1,'+
                                 'quantity INT(20) NOT NULL,'+
                                 'PRIMARY KEY (customerId,variantId))';
    // console.log(sql)
    db.query(sql, (error, response) => {
        if(error){
            res.code(400)
            throw new HttpError('failure', 22005,error)
        }
        return res.status(201).send({
            status: 'success',
            data: response,
            message: 'Cart Table Created..'
        })
        
        });
    
}
exports.createCart= (req, res) => {
    let response =  {...req.body}
    let sql = 'INSERT INTO Cart SET ?';
    
    
    db.query(sql,response, (error, response) => {
        if(error){
            res.code(400)
            throw new HttpError('failure', 22005,error)
        }
        return res.status(201).send({
            status: 'success',
            data: response,
            message: 'Cart  added ..'
        })
        
    });
    
}
exports.deleteCartProduct= (req, res) => {
    const sql = "DELETE FROM Cart WHERE customerId='"+req.body.customerId+"' AND variantId='"+req.body.variantId+"'"
    
    
    db.query(sql, (error, response) => {
        if(error){
            res.code(400)
            throw error;
        }
        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Cart Product deleted ..'
        })
        
    });
}
exports.getCartInfo= (req, res) => {
    let sql = "SELECT * FROM Cart WHERE customerId='"+req.query.customerId+"';"
    
    db.query(sql, (error, response) => {
        if(error){
            res.code(400)
            throw error;
        }
    
        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Cart Info..'
        })
        
    });
   
}
exports.updateQuantityToBuy = (req, res) => {
    let sql = "UPDATE Cart SET quantityToBuy="+req.body.quantityToBuy +" WHERE customerId='"+req.body.customerId+"' AND variantId='"+req.body.variantId+"';"
    
    db.query(sql, (error, response) => {
        if(error){
            res.code(400)
            throw error;
        }
    
        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Quantity To Buy  Updated...'
        })
        
    });
   
}
exports.updateQuantity = async (req,res) =>{
    
    const inventories = await axios.post('http://localhost:3001/getInventoryInfo',{variantId:req.body.variantId})
    var sql = `UPDATE Cart SET quantity = CASE `

    var variantId=`(`
    inventories.data.data.forEach((variant,index)=>{
        variantId += `"${variant.variantId}"`
        sql += `WHEN variantId = "${variant.variantId}" THEN ${variant.inventory} `
        if(req.body.variantId.length-1 !== index){
            variantId += `,`
        }
    })
    variantId += `)`
    sql += `END WHERE variantId IN ${variantId};`
    console.log(sql)

    db.query(sql, (error, response) => {
        if(error){
            res.code(400)
            throw error;
        }
    
        return res.status(200).send({
            status: 'success',
            data: response,
            message: 'Quantity Updated...'
        })
        
    });
}

