const path =require('path')
const  rootDir = require('../utl/path')

const  express = require('express');
const router = express.Router();
const productsController = require('../controller/product')

router.get('/', productsController.getProduct)

    module.exports = router;