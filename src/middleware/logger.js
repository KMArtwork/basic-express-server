'use strict'

const logger = (request, response, next) => {
  console.log(`Request: ${request.method} | URL: ${request.url}`)
  next();
}

module.exports = logger;