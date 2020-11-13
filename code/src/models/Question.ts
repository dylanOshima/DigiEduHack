export interface Question {
    text: string;
    topics: string[];
}

export interface AnsweredQuestion extends Question{
    answer: string;
    correct: boolean;
}