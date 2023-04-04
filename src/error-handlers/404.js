'use strict'

const error404 = (request, response, next) => {
  if (!request.url) {
    response.status(404).send('Invalid route')    
  }
  else if (!request.method) {
    response.status(404).send('Invalid method')
  }
  else {
    next()    
  }
}

module.exports = error404;