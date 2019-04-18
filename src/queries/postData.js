const dbConnection = require('../database/db_connection.js');
const getData = require('./getData');

const addRide = (driverid, pickup, dropoff, price, response, cb) => {
  dbConnection.query(
    // `SELECT * FROM rides;`,
    `INSERT INTO rides (driver_id, pickup, dropoff, price) VALUES ($1, $2, $3, $4);`,
    [driverid, pickup, dropoff, price],
    (err, res) => {
      console.log(res);
      // console.log(err)
      // console.log(res.rows)
      if (err) return cb(err);
      cb(null, res, console.log(response));
    }
  )
}

const addRider = (rider, callback) => {
  dbConnection.query(
    `INSERT INTO rides (rider_id) VALUES ($1)`,
    [rider_id],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = {addRide: addRide, addRider: addRider};
