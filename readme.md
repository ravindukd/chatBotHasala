# Chat Bot App
### How to create this project Again :)

## Created new Folder and 

*on terminal*
1. `firebase init` (firebase cli needs to be installed)
2. `hosting`
3. `exisiting`
4. `project (v2-jblahq)`

## then installed dependencies
*on terminal*
1. `cd ./functions`
2.  `npm install`

## then on functions/index.js
1.  uncommented `expor...functions.https..`
2.  changed function name from `helloWorld` to `chatBotChat`

[Copied this code from Official Google Dialogflow NodeJS Client Github Repo :)](https://github.com/googleapis/nodejs-dialogflow "Github Repo")

*on terminal*
1.  `npm install dialogflow`


## Made Very Simple Changes.
*on functions/main.js*
```javascript
 let res = await runSample(request.body.message || request.query.message); //new
 const projectId = 'v2-jblahq'; //new
 async function runSample(message) {  //new message
 text: message //new message 
```

*on terminal*
1.  `firebase deploy`


*|on firebase console|* -> [console.firebase.com](console.firebase.com "Firebase Console")
1.  `v2-jblahq`
2. `firebase -> develop -> functions`
	-> link to chatbotChat function 
	GET REQUEST ON BROWSER ( [https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT>](https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT> "Change MESSAGE TO AGENT and send") )
