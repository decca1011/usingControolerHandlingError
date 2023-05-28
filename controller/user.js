
const path = require('path')
const  rootDir = require('../utl/path')

exports.contact = (req, res, next)=>{
    console.log("in the onother middle ware")
     res.sendFile(path.join(rootDir,'views','contact.html'))
     }


exports.response = (req,res,next)=>{
        //  res.send('Thanks for submitt')
           res.sendFile(path.join(rootDir, 'views', 'submit.html'));
         
       }