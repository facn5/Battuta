const url = require('url');
const handler = require('./handlers');

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
    } else if (url === '/auth') {
      const send401 = () => {
        const message = 'fail!';
        res.writeHead(
          401,
          {
            'Content-Type': 'text/plain',
            'Content-Length': message.length
          }
        );
        return res.end(message);
      }

      if (!req.headers.cookie) return send401();

      const { jwt } = parse(req.headers.cookie);

      if (!jwt) return send401();

      return verify(jwt, SECRET, (err, jwt) => {
        if (err) {
          return send401();
        } else {
          const message = `Your user id is: ${jwt.userId}`;
          res.writeHead(
            200,
            {
              'Content-Type': 'text/plain',
              'Content-Length': message.length
            }
          );
          return res.end(message);
        }
      });
    }
  }





module.exports = router;
