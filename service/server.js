const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)
var auxFunctions = require('./auxFunctions.js')



app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/get-data', (req, res) => {
    var bruteIp = req.ip
    cleanIp = auxFunctions.cleanIp(bruteIp);
    console.log(cleanIp)
    res.status(200).send("OK")
  });

// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
