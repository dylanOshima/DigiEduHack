import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import {MenuBar} from "./MenuBar";
import {AnsweredQuestion} from "../models/Question";
import {Link, useParams} from "react-router-dom";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import "../styles/LeaderBoardView.css";
import {User} from "../models/User";
import {UserFeed} from "./Userfeed";
import {emptyGameData, mockAnsweredQuestions, mockGameState} from "../models/MockData";
import {subscribe} from "../firebase";
import {LocalGameState} from "../models/GameState";


export default function LeaderBoardView(props: any) {
    let params: any = useParams();
    const sessionId: string = params.sessionId;

    const {username} = props;
    console.log(username);

    const [correctQuestions, setCorrectQuestions] = useState<AnsweredQuestion[]>([]);
    const [incorrectQuestions, setIncorrectQuestions] = useState<AnsweredQuestion[]>([]);

    const [game, setGame] = useState<LocalGameState>({
        ...emptyGameData,
        currentUser: {username: username, score: 0},
    });

    useEffect(() => {
        subscribe(sessionId, (gameState) => {
            setGame({...gameState, currentUser: {username: username, score: 0}})
        });
        parseQuestions(mockAnsweredQuestions);
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

    console.log(game.users !== []);
    console.log(mockGameState)
    return (
        (game.users.length !== 0) ?
            <Grid container className="App">
                <MenuBar/>
                <Grid container item md={12} xs={12}>
                    <LeaderBoard users={game.users || mockGameState.users}/>
                    <Grid container item md={6} xs={6} className="leaderboard-view">
                        <SummaryCard correctQuestions={correctQuestions} incorrectQuestions={incorrectQuestions}/>
                    </Grid>
                </Grid>
            </Grid> : null

    )
}

interface LeaderBoardProps {
    users: User[]
}

const LeaderBoard = (props: LeaderBoardProps) => {
    const {users} = props;
    users.sort((a, b) => b.score - a.score);
    return (
        <Grid container item md={6} xs={6} style={{marginTop: "10vh"}}>
            <div>
                <Grid container spacing={10}>
                    <Grid item md={12} xs={12} style={{marginLeft: "37%"}}>
                        <UserFeed username={users[0].username} score={users[0].score} isWinner/>
                    </Grid>
                    <Grid container item md={12} xs={12} style={{marginLeft: "10%", marginTop: "1em"}}>
                        <Grid item md={4} xs={4}>
                            <UserFeed username={users[1].username} score={users[1].score}/>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <UserFeed username={users[2].username} score={users[2].score}/>
                        </Grid>
                        {users[3] ? <Grid item md={4} xs={4}>
                            <UserFeed username={users[3].username} score={users[3].score}/>
                        </Grid> : null}
                    </Grid>
                    <Grid item md={12} xs={12} className="App-menu" style={{marginLeft: "3%", marginTop: "4em"}}>
                        <Link to="/">
                            <button className="submit" type="submit"> Back Home</button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

interface SummaryCardProps {
    correctQuestions: AnsweredQuestion[];
    incorrectQuestions: AnsweredQuestion[];
}

interface TopicCounter {
    [topic: string]: number
}

const SummaryCard = (props: SummaryCardProps) => {
    const {correctQuestions, incorrectQuestions} = props;

    let topicCounter: TopicCounter = {};

    incorrectQuestions.forEach(question => question.topics.forEach(topic => {
        if (topic in topicCounter) topicCounter[topic] += 1;
        else topicCounter[topic] = 1;
    }));

    const counts = Object.entries(topicCounter).sort((a, b) => b[1] - a[1]);
    const reviewTopics: string[] = counts.slice(0, 4).map(entry => entry[0]);

    return (
        <Paper elevation={0} className="summary-card">
            <Grid container>
                <Grid item md={12} xs={12}>
                    <h3>You should focus your review on:</h3>
                </Grid>
                <Grid item md={12} xs={12}>
                    {reviewTopics.join(", ")}
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
    )
}

const AnswerCard = (props: AnsweredQuestion) => {
    const {correct, text, answer} = props;

    let icon;
    if (correct) icon = <CheckCircleIcon style={{fill: "green"}}/>
    else icon = <CancelIcon style={{fill: "red"}}/>
    return (
        <Paper className="answer-card">
            <Grid container>
                <Grid item md={2}>
                    {icon}
                </Grid>
                <Grid item md={6}>
                    {text}
                </Grid>
                <Grid item md={4}>
                    {answer}
                </Grid>
            </Grid>
        </Paper>
    )
}

