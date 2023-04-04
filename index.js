'use strict'

const app = require('./src/server');
require('dotenv').config();

const serverUrl = process.env.PORT

app.listen(serverUrl, () => {
  console.log(`Server is running, listening on ${serverUrl}`)
})