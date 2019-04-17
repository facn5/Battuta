const dbConnection = require('../database/db_connection.js');

const getRides = (callback) => {
  dbConnection.query(`SELECT * FROM rides`, (error, result) => {
    if (error) return callback(error);
    // console.log('This is the result: ' + result.rows);
    callback(null, result);
  })
}

module.exports = getRides;
