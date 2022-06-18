const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_product");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all", ctrl.getAll);
routing.get("/sort/name",ctrl.sortbyName);
routing.get("/sort/date",ctrl.sortbyDate);
routing.get("/sort/price/asc",ctrl.sortbyPriceASC);
routing.get("/sort/price/desc",ctrl.sortbyPriceDESC);
routing.get("/sort/category/:name_category",ctrl.sortbyCategory)
routing.get("/search",ctrl.searchbyName)

//UPDATE --> PUT
routing.put("/update", ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id_product", ctrl.removeData);

module.exports = routing;