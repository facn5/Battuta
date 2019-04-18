function getRides(callback){
  fetch('/getOffers')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("return below:")
    console.log(data);
    return callback(data);
  })
  .catch(function(error) {
    return error;
  })
}

(function() {
  getRides();
}) ();
