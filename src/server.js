'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger')
const validator = require('./middleware/validator')

app.use(cors());

app.use(logger);

app.get('/person', (request, response, next) => {

  if (request.query.name) {
    response.status(200).send(
      JSON.stringify({
        name: request.query.name
      })
    )
  }
  else {
    response.status(500).send('Error 500')
  }

})

module.exports = app;