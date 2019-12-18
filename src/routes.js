const {Router} = require('express');
const qs = require('querystring');
const routes = new Router();

const token = require('./online');


routes.use((req, res, next)=>{
  console.log(`Method:${req.method}; URL:${req.url} body:${req.body} ` );
  return next();
});

routes.post(`/new_user_identified.fcgi?session=${token}`, (req, res)=>{
  const decode = qs.decode(req.query);
  console.log(decode);
  return res.json({dy
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
