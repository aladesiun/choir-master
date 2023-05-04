const { createConnection } = require("mysql");

const pool = createConnection({
    host:"127.0.0.1",
    port:"8889",
    database:"choir_master",
    user:'root',
    password:'root',
    connectionLimit:10
})


module.exports = pool;
