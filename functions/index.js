const functions = require('firebase-functions');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

exports.chatbotChat = functions.https.onRequest(async(request, response) => {
    let res = await runSample(request.body.message || request.query.message); //new
    response.send(res);
});


async function runSample(message) { //new
    // A unique identifier for the given session
    const sessionId = uuid.v4();
    const projectId = 'v2-jblahq';    
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: message, //new
          // The language used by the client (en-US)
          languageCode: 'en-US',
        },
      },
    };
  
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    return result; //new
  }