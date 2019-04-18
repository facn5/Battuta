function getRides(callback) {
  fetch('/getRides')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.rows);
    updateRides(data.rows);
    return callback(data);
  })
  .catch(function(error) {
    return (error);
  })
}

function updateRides(rides) {
  let myRides = document.getElementById('myRides')
  myRides.innerHTML = "";
  let update = JSON.stringify(rides)
  console.log("Length is: " + rides.length);
  console.log("update with the following: " + JSON.stringify(rides[0]));
//driver_id, pickup, dropoff, price
  for (let i = 0; i < rides.length; i++) {
    myRides.appendChild(<tr><td></td><td></td><td></td><td></td></tr>);

  }
}

getRides();
