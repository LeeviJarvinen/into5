const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser2',
  password: 'netpass',
  database: 'opintorekisteri'
});
module.exports = connection;