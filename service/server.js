const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)
const config = require ('./config');
const auxFunctions = require('./auxFunctions.js');



app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/get-data', async (req, res) => {
    var bruteIp = req.ip
    cleanIp = auxFunctions.cleanIp(bruteIp);
    var ipInfo = await auxFunctions.getIPInfo(cleanIp);
    console.log(ipInfo);
    res.status(200).send("OK")
  });

// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
