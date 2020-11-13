import firebase from 'firebase';

import { firebaseConfig } from './fbconfig';

import { GameState } from "./models/GameState";
import { mockGameState } from "./models/MockData";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const emptyGameData: GameState = {
    users: [],
    questions: mockGameState.questions,
    answeredQuestions: [],
    questionIndex: 0,
    answers: [],
};

export const createSession = () => {
    const ID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    return db.collection("sessions")
        .doc(ID)
        .set(emptyGameData)
        .then(() => {
            return (ID);
        })
        .catch((error: any) => {
            return (error);
        });
};

export const getGameData = (id: string) => {return(
    db.collection("sessions")
        .doc(id)
        .get()
        .then(doc => {
            const data = doc.data();
            return data;
        }));
};

export const joinSession = (id: string, user: string) => {
    return (
        getGameData(id)
            .then((data: any) => {
                const { users } = data;
                db.collection("sessions")
                    .doc(id)
                    .update({ users: [...users, user]})
            })
    );
};

export const subscribe = (id: string, callback: (arg: any) => void) => (
    db.collection("sessions").doc(id).onSnapshot((doc) => {
        // var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());
        callback(doc.data());
    })
);
