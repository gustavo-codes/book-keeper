const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"mydb",
    password:"guga1234",
    port:5432,
});

module.exports = pool