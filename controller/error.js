
const path = require('path')
const  rootDir = require('../utl/path')

exports.error404 = (req,res,next) => {
    //res.status(404).render('404',{pageTitle: ' page not found'})
   // res.sendFile(path.join(__dirname,'views','PageNotFound.html'))

    res.sendFile(path.join(rootDir, 'views', 'PageNotFound.html'));

}