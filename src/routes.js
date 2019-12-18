const {Router} = require('express');
const qs = require('querystring');
const routes = new Router();
const axios = require('axios')

const token = require('./online');


routes.use((req, res, next)=>{
  console.log(`Method:${req.method}; URL:${req.url} body:${req.body} ` );
  console.log(req.query)
  return next();
});



<<<<<<< HEAD
routes.post('/', (req, res)=>{
  return res.json({
    'result':
  {'event': 7,
    'user_id': 6,
    'user_name': 'Neal Caffrey',
    'user_image': false,
    'portal_id': 1,
    'actions': [
      {'action': 'door',
        'parameters': 'door=1'},
      {'action': 'door',
        'parameters': 'door=2'},
    ],
  },
  });
=======
routes.all('/**', (request, response) => {
  console.log('Path -> ' + request.path);
  console.log('Query params -> ' + JSON.stringify(request.query));
  console.log('Content type -> ' + request.get('content-type'));
  console.log('Body length -> ' + request.get('content-length'));

>>>>>>> c07eb56cdbc19a1e5dee0c845addec1b98bde606
});



module.exports = routes;
