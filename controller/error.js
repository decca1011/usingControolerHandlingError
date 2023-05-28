
const path = require('path')
const  rootDir = require('../utl/path')

exports.error404 = (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','PageNotFound.html'))
}