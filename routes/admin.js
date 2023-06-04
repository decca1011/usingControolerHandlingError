const path = require('path')
// const  rootDir = require('../utl/path')

const express = require("express")
const router = express.Router()

const adminController = require('../controller/admin')

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;