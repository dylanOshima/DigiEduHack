import { QuestionAnswerSharp } from "@material-ui/icons";
import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';

import '../styles/GameView.css'

type questionProps = {
    questionText: string,
}

type answerProps = {
    onSubmit: any,
};

export type userType = {
    username: string,
    score: number,
}

export type questionType = {
    text: string,
    topics: string[],
}

export type answerType = {
    user: string,
    answer: string,
    score: number,
}

export type gameStateType = {
    users: userType[],
    questions: questionType[],
    question_idx: number,
    answers: answerType[],
    currentUser: string,
}

const Question = ({text, topics}: questionType) => (
    <div className="card question">
        <h3>{text}</h3>
        {topics.map((t) => (
            <span className="topic">{t}</span>
        ))}
    </div>
);

const Answer = ({onSubmit}: answerProps) => (
    <div className="answer">
        <input type="text" id="answer" className="card"
            placeholder="Write your answer here!"
            onChange={(e) => {}}/>
        <button className="card submit" type="submit">Submit</button>
    </div>
);

const QuestionAnswer = ({ onSubmit, ...props }: any) => (
    <>
        <Question {...props} />
        <Answer onSubmit={onSubmit} />
    </>
);

const ReviewAnswers = ({ answers, ...props }: any) => (
    <div className="review">
        <div className="card left">
            <Question {...props} />
        </div>
        <div className="card right">
            {answers.map(({answer, score}: answerType) => (
                <div className="card answer">
                    {/* <span className="score" pos={score > 0} neg={score < 0}>
                        {score > 0 ? `+${score}` : score}
                    </span> */}
                    <span className="answer">{answer}</span>
                    <div className="voter"></div>
                </div>
            ))}
        </div>
    </div>
);

export default function GameLogic(props: gameStateType) {
    const { answers, questions, question_idx, currentUser } = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log();
    }

    let ret;

    // if (false) {
    if (!answers.some(({ user, answer }) => user === currentUser)) {
        ret = <QuestionAnswer onSubmit={onSubmit} {...questions[question_idx]} />
    }

    if (true) {
        ret = <ReviewAnswers answers={answers} {...questions[question_idx]} />;
    }

    return (
        <div className="Game w3-center">
            {ret}
        </div>
    )
}