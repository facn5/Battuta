const fs = require('fs');
const path = require('path');
const qs = require('querystring');
// const getData = require('./queries/getData');
const postData = require('./queries/postData');
// const deleteData = require('./queries/deleteData');

let extType = {
    html: { "content-type": "text/html" },
    css: { "content-type": "text/css" },
    js: { "content-type": "application/javascript" },
    json: { 'content-type': 'application/json' }
}

const handleHome = (res) => {
    let pathFile = path.join(__dirname, "..", "public", "layouts", "index.html");
    fs.readFile(pathFile, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("error500");
        } else {
            res.writeHead(200, extType.html);
            res.end(file);
        }
    })
}

const handlePublic = (url, res) => {
    const ext = url.split('.')[1];
    let pathFile = path.join(__dirname, '..', url);
    fs.readFile(pathFile, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("error500");
        } else {
            res.writeHead(200, extType[ext]);
            res.end(file);
        }
    })
}

const handlePost = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk
  });
  req.on('end', () => {
    if (body != null) {
      const ps = qs.parse(body);
      // console.log(typeof +ps.driverid);
      console.log(ps);
      console.log(ps.driverid, ps.pickup, ps.dropoff, ps.price);
      postData.addRide(+ps.driverid, ps.pickup, ps.dropoff, +ps.price, res, (err, result) => {
        if (err)
        console.log("error 2"+ err);
        res.writeHead(302, {'Location': '/'});
        res.end();
      });
    };
  });
};

module.exports = {
    home: handleHome,
    public: handlePublic,
    post: handlePost
}
