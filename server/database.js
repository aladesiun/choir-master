const { createConnection } = require("mysql");
require('dotenv').config();

const db = createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    // password:process.env.PASSOWRD,
})


module.exports = db;
