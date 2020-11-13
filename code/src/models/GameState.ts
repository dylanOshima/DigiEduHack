import {Answer, AnsweredQuestion, Question} from "./Question";
import {User} from "./User";

export interface GameState {
    users: User[];
    questions: Question[];
    answeredQuestions?: AnsweredQuestion[];
    questionIndex: number;
    answers: Answer[];
    currentUser: User;
}