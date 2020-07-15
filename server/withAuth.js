var jwt = require('express-jwt');

export default jwt({
  secret: process.env.SECRET,
  getToken: (req) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ') === 'Bearer'){
      return req.headers.authorization.split(' ')[1];
    }
    return null
  }
})
