const path =require('path')
const  rootDir = require('../utl/path')

const  express = require('express');
const router = express.Router();
const productsController = require('../controller/product')

router.get('/', productsController.getProduct)


router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

    module.exports = router;