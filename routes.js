// Routes

// Const
const express = require('express');
const routes = express.Router( );
const ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get('/products', ProductController.index); 
// Segunda rota
routes.get('/products/:id', ProductController.show);
// Terceira rota
routes.post('/products', ProductController.store);
// Quarta rota
routes.put('/products/:id', ProductController.update);
// Quinta rota
routes.delete('/products/:id', ProductController.destroy);

// Exports
module.exports = routes;
