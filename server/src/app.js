const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/controller/task.controller')
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors')


const app = express()





app.use((err, req, res, next) => res.send(err.message))

module.exports = app