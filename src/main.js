const express = require("express");
const routing = express.Router();
const product = require("./routes/routes_product.js")
const respone = require('./helpers/respone')

routing.use('/product', product)
routing.use('/product/*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

routing.use('*',(req,res) => {
    return respone(res, 404, 'Alamat URL yang anda masukkan salah')
})

module.exports = routing