import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
      .collection("messages").add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

exports.makeUppercase = functions.firestore.document("/messages/{documentId}")
    .onCreate((snap, context) => {
      // Grab the current value of what was written to Firestore.
      const original = snap.data().original;

      // Access the parameter `{documentId}` with `context.params`
      functions.logger.log("Uppercasing", context.params.documentId, original);

      const uppercase = original.toUpperCase();

      // You must return a Promise when performing
      // asynchronous tasks inside a Functions such as
      // writing to Firestore.
      // Setting an 'uppercase' field in Firestore document returns a Promise.
      return snap.ref.set({uppercase}, {merge: true});
    });
