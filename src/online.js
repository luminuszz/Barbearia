
const axios = require('axios');

function token() {
  axios.post('http://192.168.8.2/login.fcgi', {
    login: 'admin',
    password: 'admin',
  }).then((response)=>{
    const token1 = response.data.session;
    console.log(token1);
  });
}


token()
;

;

935176
;

/**
 *  axios.post(`http://192.168.8.2/create_objects.fcgi?session=${token1}`, {
      'object': 'devices',
      'values': [
        {
          'name': 'serv amazon',
          'ip': '18.222.34.186:3000',
          'public_key': '',
        },
      ],
    }).then((response)=>console.log(response.data));
 */
