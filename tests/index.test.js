const request = require('supertest');
const {app, server} = require('../index');

let testId = 26;

describe('Test the root path', () => {
  test('It should respond with "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('Test the users endpoints', () => {
  test('It should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Johan Finndahl', isAdmin: false });
      console.log(response.body);
      testId = response.body.id;
      expect(response.body.name).toEqual('Johan Finndahl');
    expect(response.statusCode).toBe(200);
  });
// more tests here
})

test('It should update a user', async () => {
  const response = await request(app)
    .put('/api/users/'+testId)
    .send({ name: 'Pranati Pradhan', isAdmin: true });
    expect(response.body.name).toEqual('Pranati Pradhan');
  expect(response.statusCode).toBe(200);
});

test('It should delete a user', async () => {
  const response = await request(app).delete('/api/users/'+testId);
  console.log(response.body);
  expect(response.body).toEqual({ data: 'The user with id of '+testId+' is removed.'});
  expect(response.statusCode).toBe(200);
});


afterAll(done => {
  // Closing the connection allows Jest to exit successfully.
  server.close()
  done()
})
