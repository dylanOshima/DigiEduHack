import { firebaseConfig } from './fbconfig';

const admin = require('firebase-admin');
const serviceAccount = require('./fbadmin.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export const createSession = (callback: any) => {
  const ID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
  console.log(ID);
  db.collection('Sessions').doc(ID).set({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function() {
    console.log("Document written");
    callback(ID);
  })
  .catch(function(error: any) {
    console.error("Error adding document: ", error);
  });
};
