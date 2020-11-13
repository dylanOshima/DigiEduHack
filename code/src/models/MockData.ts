import {LocalGameState} from "./GameState";
import {AnsweredQuestion} from "./Question";

export const mockGameState: LocalGameState = {
     users: [
        {username: "Vitto", score: 120},
        {username: "Dylan", score: 700},
        {username: "Ramzy", score: 10},
        {username: "Marco", score: 1000},
    ],
    questions: [
        {text: "Very long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic1", "Topic2", "Topic4"]},
        {text: "Another long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic2", "Topic6", "Topic8"]},
        {text: "Q3 is a very long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic3", "Topic6", "Topic9"]},
        {text: "Q4 is my favourite long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic4", "Topic56", "Topic13"]},
    ],
    questionIndex: 0,
    answers: [
        {user: {username: "Marco", score: 1000}, answer: "123", votes: 1},
        {user: {username: "Vitto", score: 120}, answer: "12132113", votes: 3},
        {user: {username: "Ramzy", score: 10}, answer: "1333", votes: -1},
        {user: {username: "Dylan", score: 700}, answer: "3", votes: 6}
    ],
    currentUser: {username: 'Lollo', score: 100},
}

export const mockAnsweredQuestions: AnsweredQuestion[] = [
    {
        text: "Are you stupid in the nostril?",
        topics: ["Stupidity", "Mandemship"],
        answer: "Yes",
        correct: true
    },
    {
        text: "Are you stupid in the bare motherfucking nostril?",
        topics: ["Stupidity", "Mandemship"],
        answer: "No",
        correct: false
    },
    {
        text: "Are you stupid?",
        topics: ["Mandemship", "Retardedness"],
        answer: "Yes",
        correct: true
    },
    {
        text: "Are you stupid?",
        topics: ["Stupidity", "Mandemship"],
        answer: "No",
        correct: false
    },
    {
        text: "Are you stupid?",
        topics: ["Stupidity", "Retardedness"],
        answer: "Yes",
        correct: true
    },
    {
        text: "Are you stupid?",
        topics: ["Mandemship", "Mandemship"],
        answer: "No",
        correct: false
    },
    {
        text: "Are you stupid?",
        topics: ["Stupidity", "Retardedness"],
        answer: "Yes",
        correct: true
    },
    {
        text: "Are you stupid?",
        topics: ["Mandemship", "Mandemship"],
        answer: "No",
        correct: false
    },
    {
        text: "Are you stupid?",
        topics: ["Stupidity", "Retardedness"],
        answer: "Yes",
        correct: true
    },
    {
        text: "Are you stupid?",
        topics: ["Mandemship", "Retardedness"],
        answer: "No",
        correct: false
    },
]