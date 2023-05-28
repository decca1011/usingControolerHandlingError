const path = require('path')
const  rootDir = require('../utl/path')
var i=0;
exports.getAddProduct = (req, res, next) => {
   
    console.log("in the onother middle ware",++i)
     res.sendFile(path.join(rootDir,'views','add-product.html'))
     }

exports.postAddProduct = (req,res,next) => {
        res.redirect('/')
     }


exports.getProduct = (req, res, next)=>{
        res.sendFile(path.join(rootDir,'views','shop.html'));
     }