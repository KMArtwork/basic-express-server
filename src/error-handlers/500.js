'use strict'

const error500 = (request, response, next) => {
  if(!request.query.name) {
    response.status(500).send("Missing 'name' query")    
  }
  else {
    next();    
  }
}

module.exports = error500;