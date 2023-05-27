 ### Installation
 - Git clone
 - Need Node V12
 - npm install
 
 ### Configuration
Create a ***config.js*** based in a sample config.js.sample, and input your service ApiKey
- https://ipapi.com/
- https://support.virustotal.com/hc/en-us/articles/115002088769-Please-give-me-an-API-key
Next, configure different images, go to ***configPages.js***
You can add title and image, images saved in ./images
	`images.girl = {
    title: "view my photo",
    img: "girl.jpg"
}`

### Run
Simple, use npm start {varOfImage}
Example: 
    ***npm start girl***
If no parameters are provided, the one defined as 'default' in the configuration file will be chosen.