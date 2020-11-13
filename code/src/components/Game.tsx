import {QuestionAnswerSharp} from "@material-ui/icons";
import React, {FormEvent, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';

import {answerQuestion, upvoteAnswer, downvoteAnswer} from '../firebase';

import '../styles/GameView.css'
import '../styles/App.css';

import {LocalGameState} from "../models/GameState";
import {Answer, Question} from "../models/Question";
import {Grid} from "@material-ui/core";

type answerProps = {
    onSubmit: any,
    setAnswer: any,
};

const QuestionComponent = ({text, topics}: Question) => (
    <div className="card question">
        <h3 style={{marginBottom: "1em"}}>{text}</h3>
        {topics && topics.map((t) => (
            <span key={t} className="topic">{t}</span>
        ))}
    </div>
);

const AnswerComponent = ({onSubmit, setAnswer}: answerProps) => (
    <Grid container className="answer">
        <Grid item md={8} xs={8}>
            <input type="text" id="answer" className="card"
                   placeholder="Write your answer here!"
                   onChange={(e) => {setAnswer(e.target.value)}}/>
        </Grid>
        <Grid item md={4} xs={4}>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </Grid>
    </Grid>
);

const QuestionAnswer = ({onSubmit, setAnswer, ...props}: any) => (
    <Grid container>
        <Grid item container>
            <QuestionComponent {...props} />
        </Grid>
        <Grid item container>
            <AnswerComponent setAnswer={setAnswer} onSubmit={onSubmit}/>
        </Grid>
    </Grid>
);

const AnswerRow = ({sessionID, ...a}: any) => {
    const { answer, votes } = a;
    const [localScore, setLocalScore] = useState(0);

    const increase = () => {
        if (localScore < 1) {
            setLocalScore(localScore + 1);
            upvoteAnswer(sessionID, a);
        }
    };
    const decrease = () => {
        if (localScore > -1) {
            setLocalScore(localScore - 1)
            downvoteAnswer(sessionID, a);
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

const ReviewAnswers = ({answers, sessionID, ...props}: any) => (
    <div className="review">
        <div className="left">
            <QuestionComponent {...props} />
        </div>
        <div className="right">
            {answers.map((a: Answer) => (<AnswerRow key={a.user.username} sessionID={sessionID} {...a} />))}
        </div>
    </div>
);

export default function Game(props: LocalGameState) {
    const {answers, questions, questionIndex, currentUser, sessionID} = props;

    const [answer, setAnswer] = useState<string>("");
    const history = useHistory();

    console.log({"ciao": "ciao"}, props);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(answer);
        answerQuestion(sessionID, {user: currentUser, answer, votes: 0});
    }

    let ret;
    console.log(questionIndex, questions.length);

    if (questionIndex < questions.length && !answers.some(({user, answer}) => user.username === currentUser.username)) {
        ret = <QuestionAnswer onSubmit={onSubmit} setAnswer={setAnswer} {...questions[questionIndex]} />
    }
    else if (questionIndex < questions.length) {
        ret = <ReviewAnswers sessionID={sessionID}
                answers={answers.sort((a, b) => (b.votes - a.votes))}
                             {...questions[questionIndex]} topics={[]}/>;
    }

    else {
        history.push(`/session/${sessionID}/leaderboard`);
    }

    return (
        <div className="Game w3-center">
            {ret}
        </div>
    )
}