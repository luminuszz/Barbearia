const {Router} = require('express');

const routes = new Router();


routes.post('/new_user_identified.fcgi', (req, res)=>{
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
