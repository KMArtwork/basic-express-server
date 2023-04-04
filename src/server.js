'use strict'

// require dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')
const error404 = require('./error-handlers/404')
const error500 = require('./error-handlers/500')

// use middlewares
app.use(cors());
app.use(logger);
app.use(validator);

// handle GET request to person route
app.get('/person', (request, response, next) => {

  if (request.query.name) {
    response.status(200).send(
      JSON.stringify({
        name: request.query.name
      })
    )
  }
  else {
    next()
  }
})

app.use(error404)
app.use(error500)

module.exports = app;