# Chat Bot App
------ How to create this project Again :)

## Created new Folder and 

*on terminal*
--> `firebase init` (firebase cli needs to be installed)
--> `hosting`
--> `exisiting`
--> `project (v2-jblahq)`

## then installed dependencies
*on terminal*
--> `cd ./functions`
--> `npm install`

## then on functions/index.js
--> uncommented `expor...functions.https..`
--> changed function name from `helloWorld` to `chatBotChat`

[Copied this code from Official Google Dialogflow NodeJS Client Github Repo :)](https://github.com/googleapis/nodejs-dialogflow "Github Repo")

*on terminal*
--> `npm install dialogflow`


## Made Very Simple Changes.
*on functions/main.js*
```javascript
 let res = await runSample(request.body.message || request.query.message); //new
 const projectId = 'v2-jblahq'; //new
 async function runSample(message) {  //new message
 text: message //new message 
```

*on terminal*
--> `firebase deploy`


*|on firebase console|* -> [console.firebase.com](console.firebase.com "Firebase Console")
--> `v2-jblahq`

`firebase -> develop -> functions`
	-> link to chatbotChat function 
	GET REQUEST ON BROWSER ( [https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT>](https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT> "Change MESSAGE TO AGENT and send") )
