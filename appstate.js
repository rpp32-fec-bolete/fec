import axios from 'axios';
import token from 'config.js';

var options = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=59555',
  headers: {
    Authorization: token,
    accept: 'application/json',
    'content-type': 'application/json',
  }
}

axios(options)
.then(result => {
  console.log(result);
})


var state = {
  productid: '59555',
  productname: 'Camo Onesie',
  productdescription: ''
  questions: [],
  answers: [],
}