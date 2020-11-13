import { QuestionAnswerSharp } from "@material-ui/icons";
import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';

import '../styles/GameView.css'
import {GameState} from "../models/GameState";
import {Question} from "../models/Question";

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

const QuestionComponent = ({text, topics}: Question) => (
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
        <QuestionComponent {...props} />
        <Answer onSubmit={onSubmit} />
    </>
);

const AnswerRow = ({score, answer}: any) => {
    const [localScore, setLocalScore] = useState(0);

    const increase = () => {if (localScore < 1) {setLocalScore(localScore + 1)}};
    const decrease = () => {if (localScore > -1) {setLocalScore(localScore - 1)}};

    return (
        <h3 className="card answer-row">
            <span className="score" data-pos={score > 0} data-neg={score < 0}>
                {score > 0 ? `+${score}` : score}
            </span>
            <span className="answer-text">{answer}</span>
            <div className="voter">
                <div className="arrow-top"
                    onClick={increase} data-used={localScore === 1}></div>
                <div className="arrow-btm"
                    onClick={decrease} data-used={localScore === -1}></div>
            </div>
        </h3>
    );
};

const ReviewAnswers = ({ answers, ...props }: any) => (
    <div className="review">
        <div className="left">
            <Question {...props} />
        </div>
        <div className="right">
            {answers.map((a: answerType) => (
                <AnswerRow {...a} />
            ))}
        </div>
    </div>
);

export default function GameLogic(props: GameState) {
    const { answers, questions, questionIndex, currentUser } = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log();
    }

    let ret;

    if (!answers.some(({ user, answer }) => user === currentUser)) {
        ret = <QuestionAnswer onSubmit={onSubmit} {...questions[questionIndex]} />
    }

    if (true) {
        ret = <ReviewAnswers answers={answers.sort((a, b) => (b.score - a.score))}
            {...questions[question_idx]} topics={[]} />;
    }

    return (
        <div className="Game w3-center">
            {ret}
            <QuestionComponent text={questions[questionIndex].text} topics={['shit', 'shitter']}/>
            <Answer onSubmit={onSubmit} />
        </div>
    )
}