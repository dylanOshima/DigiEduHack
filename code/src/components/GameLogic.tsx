import {QuestionAnswerSharp} from "@material-ui/icons";
import React, {FormEvent, useState} from "react";
import {useParams} from 'react-router-dom';

import '../styles/GameView.css'
import '../styles/App.css';

import {LocalGameState} from "../models/GameState";
import {Answer, Question} from "../models/Question";
import {Grid} from "@material-ui/core";

type answerProps = {
    onSubmit: any,
};

const QuestionComponent = ({text, topics}: Question) => (
    <div className="card question">
        <h3 style={{marginBottom: "1em"}}>{text}</h3>
        {topics.map((t) => (
            <span className="topic">{t}</span>
        ))}
    </div>
);

const AnswerComponent = ({onSubmit}: answerProps) => (
    <Grid container className="answer">
        <Grid item md={8} xs={8}>
            <input type="text" id="answer" className="card"
                   placeholder="Write your answer here!"
                   onChange={(e) => {
                   }}/>
        </Grid>
        <Grid item md={4} xs={4}>
            <button type="submit">Submit</button>
        </Grid>
    </Grid>
);

const QuestionAnswer = ({onSubmit, ...props}: any) => (
    <Grid container>
        <Grid item container>
            <QuestionComponent {...props} />
        </Grid>
        <Grid item container>
            <AnswerComponent onSubmit={onSubmit}/>
        </Grid>
    </Grid>
);

const AnswerRow = ({votes, answer}: any) => {
    const [localScore, setLocalScore] = useState(0);

    const increase = () => {
        if (localScore < 1) {
            setLocalScore(localScore + 1)
        }
    };
    const decrease = () => {
        if (localScore > -1) {
            setLocalScore(localScore - 1)
        }
    };

    return (
        <h3 className="card answer-row">
            <span className="score" data-pos={votes > 0} data-neg={votes < 0}>
                {votes > 0 ? `+${votes}` : votes}
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

const ReviewAnswers = ({answers, ...props}: any) => (
    <div className="review">
        <div className="left">
            <QuestionComponent {...props} />
        </div>
        <div className="right">
            {answers.map((a: Answer) => (<AnswerRow {...a} />))}
        </div>
    </div>
);

export default function GameLogic(props: LocalGameState) {
    const {answers, questions, questionIndex, currentUser} = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log();
    }

    let ret;

    if (!answers.some(({user, answer}) => user === currentUser)) {
        ret = <QuestionAnswer onSubmit={onSubmit} {...questions[questionIndex]} />
    }

    if (true
    ) {
        ret = <ReviewAnswers answers={answers.sort((a, b) => (b.votes - a.votes))}
                             {...questions[questionIndex]} topics={[]}/>;
    }

    return (
        <div className="Game w3-center">
            {ret}
        </div>
    )
}