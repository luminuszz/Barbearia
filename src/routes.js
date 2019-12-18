const {Router} = require('express');
const qs = require('querystring');
const routes = new Router();
const axios = require('axios')

const token = require('./online');


routes.use((req, res, next)=>{
  console.log(`Method:${req.method}; URL:${req.url} body:${req.body} ` );
  console.log(req)
  return next();
});

const session  =  axios({
                method: 'post',
                url: "http://192.168.8.2/login.fcgi",
                data:{
                    login: 'admin',
                    password: 'admin'
                }
            });


routes.post(`/`, (req, res)=>{
  const decode = qs.decode(req.query);
  console.log(decode);
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
});


module.exports = routes;
