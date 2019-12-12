
const axios = require('axios');

function token() {
  axios.post('http://192.168.8.2/login.fcgi', {
    login: 'admin',
    password: 'admin',
  }).then((response)=>{
    const token1 = response.data.session;
    console.log(token1);
    axios.post(`http://192.168.8.2/create_objects.fcgi?session=${token1}`, {
      'object': 'devices',
      'values': [
        {'name': 'Teste 83',
          'ip': 'http://192.168.8.2:8080',
          'public_key': '',
        },
      ],

    }).then((response)=>console.log(response.data));
  });
}


token()
;

;

935176
;
