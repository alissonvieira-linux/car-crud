const express = require('express');
const routes = express.Router();

const CarController = require('./controllers/CarController');

routes.post('/cars', CarController.create);
routes.get('/cars', CarController.index);
routes.put('/cars/:id', CarController.update);
routes.delete('/cars/:id', CarController.delete);

module.exports = routes;