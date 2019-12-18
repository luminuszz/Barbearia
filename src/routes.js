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



routes.post(`/new_user_identified.fcgi?session=IWZMTGP4zSmRCJsepA2v4xOu`, (req, res)=>{
  const decode = qs.decode(req.query);
  console.log(decode);
  const session  =  axios({
                method: 'post',
                url: "http://192.168.8.2/login.fcgi",
                data:{
                    login: 'admin',
                    password: 'admin'
                }
            })

 
});


module.exports = routes;
