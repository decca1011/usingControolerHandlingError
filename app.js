const path = require('path')

const bodyParser = require("body-parser")
const express = require('express')

const app = express();

const adminRoutes =require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const errorhandle  = require('./controller/error')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)
 

app.use(errorhandle.error404)

app.listen(3000)
