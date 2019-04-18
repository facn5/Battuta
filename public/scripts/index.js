"use strict";

const bcrypt = require('bcryptjs');

//accepts a string, async returns a string
const hashPassword = (password, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      callback(err);
    } else {
      bcrypt.hash(password, salt, callback);
    }
  });
};

//accepts 2 strings, async returns a Boolean
const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

function getRides(callback) {
  fetch('/getRides')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    return callback(data);
  })
  .catch(function(error) {
    return (error);
  })
}

(function () {
// getRides();


// let form = document.querySelector('form');
// form.addEventListener("submit", event => {
//   event.preventDefault();
//   console.log("adding ride:", form.elements.value);
// });
}) ();

module.exports = {comparePasswords, hashPassword};
