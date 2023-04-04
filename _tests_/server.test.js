'use strict'

const server = require('../src/server')
const supertest = require('supertest')
const request = supertest(server.app)

describe('Testing if server sends back proper responses & status codes', () => {

  test('Should send a 404 on a bad route', async () => {
    const response = await request.get("/persom?name=The+dude")
    expect(response.status).toEqual(404);
  })

  test('Should send a 404 on a bad method', async () => {
    const response = await request.post('/person?name=His+Dudeness')
    expect(response.status).toEqual(404);
  })

  test('Should send a 500 if no name is in the query string', async () => {
    const response = await request.get('/person?name')
    expect(response.status).toEqual(500);
  })

  test('Should send a 200 if the request is correctly formatted', async () => {
    const response = await request.get("/person?name=Duder")
    expect(response.status).toEqual(200);
  })

  test('Should pass if response body is an object', async () => {
    const response = await request.get("/person?name=El+Duderino")
    expect(response.text).toBe(`{"name":"El Duderino"}`)
  })

})