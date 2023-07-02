var request = require('request');
request.post({
  url:     'http://localhost:8080/api/auth/signup',
  form:    {"username":"xyz","password":"xyz1234", "email":"arasu@1234", "role":"user"}
}, function(error, response, body){
  console.log(body);
});


fetch("http://localhost:8080/api/auth/signup", {
  method: "POST",
  body: JSON.stringify({username:"wgxyzw",password:"wxyz1234gw", email:"awrasgu@1234w", role:"admin"}),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  fetch("http://localhost:8080/api/auth/signin", {
  method: "POST",
  body: JSON.stringify({username:"wgxyzw",password:"wxyz1234gw"}),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));