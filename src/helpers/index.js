
// const api = 'http://localhost:3000/api/'
// const url = 'http://localhost:3000/'

const api = 'https://api-demo01.herokuapp.com/api/'
const url = 'https://api-demo01.herokuapp.com/'

var mongoObjectId = function () {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

export default{
  api,
  url,
  mongoObjectId
}
