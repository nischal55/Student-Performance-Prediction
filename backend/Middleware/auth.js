const jwt = require('jsonwebtoken')

function checkAuthentication(req, res, next) {
    let token = req.headers.authorization?.replaceAll("Bearer ", "");
  
    if (token) {
      try {
        const decodedUser = jwt.verify(token, "Nischal");
  
        req.user = decodedUser;
        return next();
      } catch (err) {
        
      }
    }
  
    return res.status(401).send({
      msg: "unauthenticated",
    });
  }

  module.exports = checkAuthentication;