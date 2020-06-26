const express = require('express');

const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');
const techController = require('./controllers/techController');

const routes = express.Router();
routes.post('/users',userController.store);
routes.get('/users',userController.index);

routes.post('/addresses/:user_id',addressController.store);
routes.get('/addresses/:user_id',addressController.index);

routes.post('/techs/:user_id',techController.store);
routes.get('/techs/:user_id',techController.index);

module.exports = routes;