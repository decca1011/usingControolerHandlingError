const path = require('path')

const express = require("express")

const router = express.Router()
const getdetail= require('../controller/user')
// router.post

router.get('/contact',getdetail.contact);

    router.post('/contact',getdetail.response);

    module.exports = router;