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



routes.all('/**', (request, response) => {
  console.log('Path -> ' + request.path);
  console.log('Query params -> ' + JSON.stringify(request.query));
  console.log('Content type -> ' + request.get('content-type'));
  console.log('Body length -> ' + request.get('content-length'));

});



module.exports = routes;
