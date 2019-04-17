const url = require('url');
const handler = require('./handlers.js');

const {readFile} = require('fs');
const {parse} = require('cookie');
const {sign, verify} = require('jsonwebtoken');

const SECRET = 'gfuahoguaooufabgeuyoaieg';

const userDetails = {userId: 56, role: 'user'};

const router = (req, res) => {
    let url = req.url;
    if(url === '/'){
      if (req.method === 'GET') {
        handler.home(res);
      }
    } else if (url === '/login') {
      if (req.method === 'POST') {
        const cookie = sign(userDetails, SECRET);
        res.writeHead(302, {'Location': '/', 'Set-Cookie': `jwt=${cookie}; HttpOnly`
      });
      return res.end();
      }
    } else if (url === '/logout') {
      if (req.method === 'POST') {
        res.writeHead(302, {'Location': '/', 'Set-Cookie': 'jwt=0; Max-Age=0'});
        return res.end();
      }
    } else if (url.indexOf('public') !== -1){
        handler.public(url, res);
    } else if (url === '/addRide') {
      if (req.method === 'POST') {
        handler.post(req, res);
        res.writeHead(302, {'Location': '/', "Content-Type": 'text/plain'});
        return res.end();
      }
    }
    else {
      res.end();}
  }

module.exports = router;
