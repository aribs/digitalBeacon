const config = require ('./config');
const axios = require('axios');

cleanIp = function (text) {
  const regx = new RegExp(/(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g)
  return text.match(regx)[0];
}

 getIPInfo = async function (ip) {
  var url = mountApiUrl(ip)
  if(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    }
    catch(error) {
      console.log(error)
    }
  } 
}

mountApiUrl = function (ip) {
  if(!ip)return;
  return config.ipApiKeyUrl + ip  + '?access_key=' + config.ipApiKey;
}



module.exports = {
  cleanIp,
  getIPInfo
}
