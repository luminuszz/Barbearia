
const axios = require('axios');

function token() {
  axios.post('http://192.168.8.2/login.fcgi', {
    login: 'admin',
    password: 'admin',
  }).then((response)=>{
    return response.data.session;
  });
}


module.exports = token();
