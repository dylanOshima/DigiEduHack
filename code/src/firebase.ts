import firebase from 'firebase';

import {firebaseConfig} from './fbconfig';

import {GameState} from "./models/GameState";
import {Answer} from "./models/Question";
import {emptyGameData} from "./models/MockData";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const createSession = () => {
    const ID = Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
    return db.collection("sessions")
        .doc(ID)
        .set({ ...emptyGameData, sessionID: ID })
        .then(() => {
            return (ID);
        })
        .catch((error: any) => {
            return (error);
        });
};

export const getGameData = (id: string) => (
    db.collection("sessions")
        .doc(id)
        .get()
        .then(doc => {
            const data = doc.data();
            return data;
        })
);

export const joinSession = (id: string, user: string) => (
    getGameData(id)
        .then((data: any) => {
            const {users} = data;
            const newUser = {username: user, score: 0};
            db.collection("sessions")
                .doc(id)
                .update({users: [...users, newUser]})
        })
);

export const subscribe = (id: string, callback: (arg: any) => void) => (
    db.collection("sessions").doc(id).onSnapshot((doc) => {
        // var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());
        callback(doc.data());
    })
);

export const answerQuestion = (id: string, answer: Answer) => (
    getGameData(id)
        .then((data: any) => {
            const {answers} = data;
            db.collection("sessions")
                .doc(id)
                .update({answers: [...answers, answer]})
        })
);

const voteAnswer = (id: string, answer: Answer, change: number) => (
    getGameData(id)
        .then((data: any) => {
            const n = data.answers.map((a: Answer) => {
                if (a.user.username === answer.user.username) {
                    return {...a, votes: a.votes + change};
                }
                return a;
            });
            db.collection("sessions")
                .doc(id)
                .update({answers: [...n]});
            if (n.some(({votes}: any) => votes >= 3)) {
            // if (n >= 3) {
                correctAnswer(id, answer);
                nextQuestion(id);
            }
        })
);

export const correctAnswer = (id: string, answer: Answer) => (
    getGameData(id)
        .then((data: any) => {
            const n = data.users.map((u: any) => {
                if (u.username === answer.user.username) {
                    return {...u, score: u.score + 100};
                }
                return u;
            });
            db.collection("sessions")
                .doc(id)
                .update({users: [...n]});
        })
);

export const upvoteAnswer = (id: string, answer: Answer) => (voteAnswer(id, answer, 1));
export const downvoteAnswer = (id: string, answer: Answer) => (voteAnswer(id, answer, -1));

export const nextQuestion = (id: string) => (
    getGameData(id)
        .then((data: any) => {
            const n = data.questionIndex
            db.collection("sessions")
                .doc(id)
                .update({questionIndex: n+1, answers: []})
        })
);

