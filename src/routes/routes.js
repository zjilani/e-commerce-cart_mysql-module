const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "GET",
        url: "/createCartTable",
        handler: controllers.createCartTable
    },
    {
        method: "POST",
        url: "/createCart",
        handler: controllers.createCart,
        schema: documentation.createCart,
        preValidation: validators.validateCreateCartRequest
    },
    {
        method: "DELETE",
        url: "/deleteCartProduct",
        handler: controllers.deleteCartProduct,
        schema: documentation.deleteCartProduct,
        preValidation: validators.validateDeleteCartProductRequest
    },
    ,
    {
        method: "GET",
        url: "/getCartInfo",
        handler: controllers.getCartInfo,
        schema: documentation.getCartInfo,
        preValidation: validators.validateGetCartInfoRequest
    }
    
]


module.exports = routes