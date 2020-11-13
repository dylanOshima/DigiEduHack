import firebase from 'firebase';

import { firebaseConfig } from './fbconfig';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const createSession = () => {
    const ID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    return new Promise((resolve, reject) => {
        db.collection("sessions")
            .doc(ID)
            .set({})
            .then(() => {
                resolve(ID);
            })
            .catch((error: any) => {
                reject(error);
            });
    })
};


