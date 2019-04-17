const dbConnection = require('../database/db_connection.js');

const getData = (callback) => {
  dbConnection.query(`SELECT * FROM users`, (error, result) => {
    if (error) return callback(error);
    console.log('This is the result: ' + result);
    callback(null, result);
  })
}

module.exports = getData;
