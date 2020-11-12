import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import {MenuBar} from "./MenuBar";
import {AnsweredQuestion} from "../models/AnsweredQuestion";
import {useParams} from "react-router-dom";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import "../styles/LeaderBoardView.css";

const mockData: AnsweredQuestion[] = [
    {
        question: "Is my dick huge?",
        answer: "Yes",
        correct: true
    },
    {
        question: "Is my dick huge?",
        answer: "No",
        correct: false
    },
    {
        question: "Is my dick huge?",
        answer: "Yes",
        correct: true
    },
    {
        question: "Is my dick huge?",
        answer: "No",
        correct: false
    },
    {
        question: "Is my dick huge?",
        answer: "Yes",
        correct: true
    },
    {
        question: "Is my dick huge?",
        answer: "No",
        correct: false
    },
    {
        question: "Is my dick huge?",
        answer: "Yes",
        correct: true
    },
    {
        question: "Is my dick huge?",
        answer: "No",
        correct: false
    },
    {
        question: "Is my dick huge?",
        answer: "Yes",
        correct: true
    },
    {
        question: "Is my dick huge?",
        answer: "No",
        correct: false
    }
]

export default function LeaderBoardView() {
    console.log('params: ', useParams());

    const [correctQuestions, setCorrectQuestions] = useState<AnsweredQuestion[]>([]);
    const [incorrectQuestions, setIncorrectQuestions] = useState<AnsweredQuestion[]>([]);

    useEffect(() => {
        parseQuestions(mockData);
    }, [])

    const parseQuestions = (questions: AnsweredQuestion[]): void => {
        let correct: AnsweredQuestion[] = [];
        let incorrect: AnsweredQuestion[] = [];

        for (const question of questions) {
            if (question.correct) correct.push(question);
            else incorrect.push(question)
        }

        setCorrectQuestions(correct);
        setIncorrectQuestions(incorrect);
    }

    return (
        <Grid container className="App">
            <MenuBar/>
            <Grid container item md={12} xs={6}>
                <Grid container item md={6} xs={6}>
                </Grid>
                <Grid container item md={6} xs={6} spacing={2} className="leaderboard-view">
                    <Paper elevation={0} className="summary-card">
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <h3>You should review:</h3>
                            </Grid>
                            {incorrectQuestions ? incorrectQuestions.map(question => <Grid item md={12} xs={12}>
                                <AnswerCard {...question}/>
                            </Grid>) : null}
                            <Grid item md={12} xs={12}>
                                <h3>Correct:</h3>
                            </Grid>
                            {correctQuestions ? correctQuestions.map(question => <Grid item md={12} xs={12}>
                                <AnswerCard {...question}/>
                            </Grid>) : null}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

const AnswerCard = (props: AnsweredQuestion) => {
    const {correct, question, answer} = props;

    let icon;
    if (correct) icon = <CheckCircleIcon style={{fill: "green"}}/>
    else icon = <CancelIcon style={{fill: "red"}}/>
    return (
        <Paper className="answer-card">
            <Grid container>
                <Grid item md={3}>
                    {icon}
                </Grid>
                <Grid item md={5}>
                    {props.question}
                </Grid>
                <Grid item md={4}>
                    {props.answer}
                </Grid>
            </Grid>
        </Paper>
    )
}

