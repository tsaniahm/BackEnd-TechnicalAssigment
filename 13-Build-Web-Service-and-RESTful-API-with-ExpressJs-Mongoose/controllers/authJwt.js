const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log(authHeader)
  
    if (authHeader) {
      const token = authHeader.split(' ')[1];
  
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
  
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };