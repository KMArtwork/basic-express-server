'use strict'

const error500 = (request, response, next) => {
  console.log('error500.js hit')
  if(!request.query.name) {
    let err = {
      message: "Missing value for 'name' query"
    }
    response.status(500).send(err)    
  }
  else {
    next();    
  }
}

module.exports = error500;