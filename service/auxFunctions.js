cleanIp = function (text) {
  const regx = new RegExp(/(?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d{1})/g)
  return text.match(regx)[0];
}
module.exports = { cleanIp }