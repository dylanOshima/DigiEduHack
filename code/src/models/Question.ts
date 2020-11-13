import {User} from "./User";

export interface Question {
    text: string;
    topics: string[];
}

export interface AnsweredQuestion extends Question{
    answer: string;
    correct: boolean;
}

export interface Answer {
    user: User;
    answer: string;
    votes: number;
}