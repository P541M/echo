const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.scheduledFunction = functions.pubsub
  .schedule("0 0 * * *")
  .timeZone("America/New_York")
  .onRun((context) => {
    const ref = admin.database().ref("messages");
    return ref
      .remove()
      .then(() => {
        console.log("Messages cleared at midnight EST");
      })
      .catch((error) => {
        console.error("Error clearing messages:", error);
      });
  });
