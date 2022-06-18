const products = {}
const model = require('../models/models_product')
const respone = require('../helpers/respone')
const moment = require('moment-timezone')

products.getAll = async (req, res) => {
    try {
        const result = await model.GetAll()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyName = async (req, res) => {
    try {
        const result = await model.SortbyName()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyDate = async (req, res) => {
    try {
        const result = await model.SortbyDate()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceASC = async (req, res) => {
    try {
        const result = await model.SortbyPriceASC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyPriceDESC = async (req, res) => {
    try {
        const result = await model.SortbyPriceDESC()
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.sortbyCategory = async (req, res) => {
    try {
        const result = await model.SortbyCategory(req.params.name_category)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.searchbyName = async (req, res) => {
    try {
        const result = await model.SearchbyName(req.query.name_product)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.addData = async (req, res) => {
    try {
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            name_product : object.name_product,
            price_product : object.price_product,
            brand_product : object.brand_product,
            store_name : object.store_name,
            description : object.description,
            createdAt : dateString,
            updatedAt : dateString
        }
        const result = await model.AddData(data)
        return respone(res, 201, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

products.updateData = async (req, res) => {
    try {
        const object = await (req.body)
        const dateString = moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        const data = {
            id : object.id,
            name_product : object.name_product,
            price_product : object.price_product,
            brand_product : object.brand_product, 
            store_name : object.store_name,
            id_category : object.id_category,
            description : object.description,
            updatedAt : dateString
        }
        const result = await model.UpdateData(data)
        return respone(res, 201, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.removeData = async (req, res) => {
    try {
        const result = await model.DeleteData(req.params.id_product)
        return respone(res, 200, result)
    } catch (error) {
        return respone(res, 500, error)
    }
}

products.getByID = async (req, res) => {
    try {
        const result = await model.GetbyID(req.params.id_product)
        return respone(res, 200, result)
    } catch (error) {
        console.log(error)
        return respone(res, 500, error)
    }
}

module.exports = products