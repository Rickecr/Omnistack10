const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

// Tipos de parâmetros:
/* 
    Query Params: request.query (Filtros, ordenação, paginação, ...)
        * http://localhost:3333/users?search=Rick

    Route Params: request.params (Identificar um recurso na atualização ou remoção)
        * http://localhost:3333/users/1

    Body: request.body (Dados para criação ou alteração de um registro)
        * http://localhost:3333/users/
*/

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;