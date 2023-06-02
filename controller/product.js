const path = require('path')
const  rootDir = require('../utl/path')
//const products = [];
var i=0;
const Product = require('../model/product');

exports.getAddProduct = (req, res, next) => {
   
    console.log("in the onother middle ware",++i)
    
     res.sendFile(path.join(rootDir,'views','add-product.html'))
      
     }

exports.postAddProduct = (req,res,next) => {
     const product = new Product(req.body.title);
     product.save();
  res.redirect('/');
      
     }
     exports.getProduct = (req, res, next) => {
          Product.fetchAll((product) => {
               res.sendFile(path.join(rootDir, 'views', 'shop.html'));
               
          });
      };