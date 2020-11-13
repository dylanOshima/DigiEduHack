import {Answer, AnsweredQuestion, Question} from "./Question";
import {User} from "./User";

export interface GameState {
    users: User[];
    questions: Question[];
    answeredQuestions?: AnsweredQuestion[];
    questionIndex: number;
    answers: Answer[];
    sessionID: string;
}

export interface LocalGameState extends GameState {
    currentUser: User;
}