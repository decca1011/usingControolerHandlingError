const path = require('path')
const  rootDir = require('../utl/path')

const express = require("express")
const router = express.Router()

const productsController = require('../controller/product')

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;