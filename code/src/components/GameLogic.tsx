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

export type gameStateType = {
    users: userType[],
    questions: questionType[],
    question_idx: number,
}

const Question = ({questionText}: questionProps) => (
    <div className="question">
        <h1>{questionText}</h1>
    </div>
);

const Answer = ({onSubmit}: answerProps) => (
    <form className="form-group answer"
        onSubmit={onSubmit} autoComplete="off">
        <input type="text" id="answer"
            onChange={(e) => {}}/>
        <button className="submit" type="submit">Submit</button>
    </form>
);

export default function GameLogic(props: gameStateType) {
    const { questions, question_idx } = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className="Game w3-center">
            <Question questionText={questions[question_idx].text} />
            <Answer onSubmit={onSubmit} />
        </div>
    )
}