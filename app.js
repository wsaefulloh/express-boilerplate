require("dotenv/config")
const express = require("express");
const server = express();
const main = require('./src/main')
const cors = require("cors")
const {orm : database} = require('./src/configs/db');
const {pool : db} = require('./src/configs/db');
const PORT = 9000;

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(main)

database.authenticate()
db.connect()
database.sync({alter : true}) 

server.listen(PORT, () => {
    console.log(`Conection to Database Success`)
    console.log(`Service running on port ${PORT}`)
})