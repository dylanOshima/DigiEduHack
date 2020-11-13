import {GameState, LocalGameState} from "./GameState";
import {AnsweredQuestion} from "./Question";

export const mockGameState: LocalGameState = {
     users: [
        {username: "Vitto", score: 120},
        {username: "Dylan", score: 700},
        {username: "Ramzy", score: 10},
        {username: "Marco", score: 1000},
    ],
    questions: [
        {text: "When was America discovered? (Hint: not 1492)", topics: ["History", "America", "Contemporary"]},
        {text: "What is Big O notation?", topics: ["Algorithms", "Informatics", "Run time analysis"]},
        {text: "What is the capital of Macedonia", topics: ["Geography", "Politics", "Europe"]},
    ],
    questionIndex: 0,
    answers: [
        {user: {username: "Marco", score: 1000}, answer: "123", votes: 1},
        {user: {username: "Vitto", score: 120}, answer: "12132113", votes: 3},
        {user: {username: "Ramzy", score: 10}, answer: "1333", votes: -1},
        {user: {username: "Dylan", score: 700}, answer: "3", votes: 6}
    ],
    currentUser: {username: 'Lollo', score: 100},
    sessionID: "f2e123r1"
}

export const emptyGameData: LocalGameState = {
    users: [],
    questions: mockGameState.questions,
    answeredQuestions: [],
    questionIndex: 0,
    answers: [],
    currentUser: {
        username: "",
        score: 0
    },
    sessionID: "",
};

export const mockAnsweredQuestions: AnsweredQuestion[] = [
    {
        text: "When was America discovered? (Hint: not 1492)?",
        topics: ["History", "America", "Contemporary"],
        answer: "1492",
        correct: true
    },
    {
        text: "What is Big O notation?",
        topics: ["Algorithms", "Informatics", "Run time analysis"],
        answer: "A measure of complexity",
        correct: false
    },
    {
        text: "What is the capital of Macedonia",
        topics: ["Geography", "Politics", "Europe"],
        answer: "Skopje",
        correct: true
    }
]