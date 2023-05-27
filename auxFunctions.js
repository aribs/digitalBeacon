const config = require ('./config');
const axios = require('axios');
const pages = require('./configPages');

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

getVirusTotalInfo = async function (ip) {
  var url = getVirustTotalUrl(ip);
  if(url) {
    try {
      const response = await axios.get(url, {
        headers: {
         "x-apikey": config.virusTotalApiKey 
        }
      });
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

getVirustTotalUrl = function(ip) {
  if(!ip)return;
  return config.virustTotalUrl + ip;
}

getPageInfo = function (pageName) {
  if(pages[`${pageName}`]) {
    return pages[`${pageName}`];
  }
  else return pages.default;
}



module.exports = {
  cleanIp,
  getIPInfo,
  getPageInfo,
  getVirusTotalInfo
}
