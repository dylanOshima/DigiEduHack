import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';

import '../styles/GameView.css'
import {GameState} from "../models/GameState";

type questionProps = {
    questionText: string,
}

type answerProps = {
    onSubmit: any,
};

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

export default function GameLogic(props: GameState) {
    const { questions, questionIndex } = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log();
    }

    return (
        <div className="Game w3-center">
            <Question questionText={questions[questionIndex].text} />
            <Answer onSubmit={onSubmit} />
        </div>
    )
}