const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)



app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/get-data', (req, res) => {
    console.log(req.body)
    console.log("enter post")
    const ip = req.ip
    console.log(ip)
    res.status(200).send("OK")
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});