const {Router} = require('express');

const routes = new Router();


routes.get('/', (req, res)=>{
  return res.json({teste: 'teste'});
});


module.exports = routes;
