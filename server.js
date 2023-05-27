const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const pug = require('pug');
const config = require ('./config');
const auxFunctions = require('./auxFunctions.js');
var cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)
app.set('view engine', 'pug');
var path = require('path');
app.use("/images", express.static(path.join(__dirname, './images')));
app.use(cors());





app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/get-data', async (req, res) => {
    var bruteIp = req.ip
    cleanIp = auxFunctions.cleanIp(bruteIp);
    var ipInfo = await auxFunctions.getIPInfo(cleanIp);
    var virusTotalInfo = await auxFunctions.getVirusTotalInfo(cleanIp);
    var virusTotalInfo = await auxFunctions.getVirusTotalInfo(cleanIp);
    console.log(ipInfo)
    console.log(virusTotalInfo)
    console.log(virusTotalInfo.data.attributes.last_analysis_results)
    res.status(200).send("OK")
  });
  app.get('/image', (req, res)=>{
    var pageName;
    process.argv[2]?  pageName = process.argv[2]:pageName = "default";
    var pageInfo = auxFunctions.getPageInfo(pageName);
    res.render(
        'index',
        pageInfo
    )
});

// Listen to the App Engine-specified port, or 80 otherwise
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
