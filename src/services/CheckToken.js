
export default  function CheckToken() {
    const axios = require('axios');
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    let token = localStorage.getItem('token');
    axios.get('http://localhost:8081/checkToken/'+ token)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}