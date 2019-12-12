const {Router} = require('express');

const routes = new Router();


routes.post('/', (req, res)=>{
  console.log(req);
  return res.json({teste: 'teste'});
});


module.exports = routes;
