Created new Folder and 

|on terminal|
--> firebase init (firebase cli needs to be installed)
--> hosting
--> exisiting
--> project (v2-jblahq)

then
--> cd ./functions
--> npm install

then on functions/index.js
--> uncommented expor...functions.https..
--> chnaged function name from helloWorld to chatBotChat

Copied code from https://github.com/googleapis/nodejs-dialogflow

|on terminal|
--> npm install dialogflow

Made Very Simple Changes.
--> let res = await runSample(request.body.message || request.query.message);
--> const projectId = 'v2-jblahq'; //new
--> async function runSample(message) { //new message
--> text: message //new message

|on terminal|
--> firebase deploy


|on firebase console| -> console.firebase.com
--> v2-jblahq

firebase -> develop -> functions
	-> link to chatbotChat function 
	GET REQUEST ON BROWSER ( https://us-central1-v2-jblahq.cloudfunctions.net/chatbotChat?message=<MESSAGE_TO_AGENT> )
