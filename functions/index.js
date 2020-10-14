const functions = require("firebase-functions");
// const fetch = require("node-fetch");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloPosts = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     return response.send(
  //       "Hello from Firebase! \n\n JSON:" + JSON.stringify(json)
  //     );
  //   });
  response.send("Hello from Firebase! \n\n Random:" + Math.random().toFixed(2));
});
