# Chat Bot App
### How to create this project Again :)

## Created new Folder and 

*on terminal*
1. **`firebase init`** (firebase cli needs to be installed)
2. **`hosting`**
3. **`exisiting`**
4. **`project (v2-jblahq)`**

## then installed dependencies
*on terminal*
1. **`cd ./functions`**
2.  **`npm install`**

## then on functions/index.js
1.  uncommented **`expor...functions.https..`**
2.  changed function name from **`helloWorld`** to **`chatBotChat`**

## AND  
[Copied this code from Official Google Dialogflow NodeJS Client Github Repo https://github.com/googleapis/nodejs-dialogflow :)](https://github.com/googleapis/nodejs-dialogflow "Github Repo")

*on terminal*
1.  **`npm install dialogflow`**


## Made Very Simple Changes.
*on functions/main.js*
```javascript
 2 const dialogflow = require('dialogflow');
 3 const uuid = require('uuid');
 6 let res = await runSample(request.body.message || request.query.message); //new
 11 async function runSample(message) {  //new message
 14 const projectId = 'v2-jblahq'; //new
 25 text: message //new message 
```

*on terminal*
1.  **`firebase deploy`**


*on firebase console* -> [console.firebase.com](console.firebase.com "Firebase Console")
1.  **`v2-jblahq`**
2. **`firebase -> develop -> functions`**
3. Link to chatbotChat function 
	**GET REQUEST ON BROWSER** ( [https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT>](https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT> "Change MESSAGE TO AGENT and send") )

# IMPORTANT
```javascript
exports.chatbotChat = functions.https.onRequest(async(request, response) => {
    res.set('Access-Control-Allow-Origin', "*") // These two lines must be added
    res.set('Access-Control-Allow-Methods', 'GET, POST') //foget to edit the code
    let res = await runSample(request.body.message || request.query.message);
    response.send(res);
});
```