import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import Game, { gameStateType, userType, questionType } from './GameLogic';

import placeholder from '../imgs/person-placeholder.svg';
import crown from '../imgs/crown.svg';

import '../styles/GameView.css'

type userFeedProps = {
    username: string,
    score: number,
    isWinner?: boolean,
}

const MOCKgameState: gameStateType = {
    users: [
        {username: "Vitto", score: 120},
        {username: "Dylan", score: 700},
        {username: "Ramzy", score: 10},
        {username: "Marco", score: 1000},
    ],
    questions: [
        {text: "Very long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic1", "Topic2", "Topic4"]},
        {text: "Another long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic2", "Topic6", "Topic8"]},
        {text: "Q3 is a very long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic3", "Topic6", "Topic9"]},
        {text: "Q4 is my favourite long question text that covers some topics and some stuff you\
            should revise", topics: ["Topic4", "Topic56", "Topic13"]},
    ],
    question_idx: 0,
}

const UserFeed = ({ username, score, isWinner }: userFeedProps) => (
    <div className="user-feed">
        <h5 className="score">{`${score}pts`}</h5>
        <div className="feed">
            <img className="crown" src={crown}
                style={{display: isWinner ? 'block' : 'none'}} alt="crown" />
            <img className="feed" src={placeholder} alt={`${username}'s feed.`} />
        </div>
        <h5 className="username">{username}</h5>
    </div>
);

const UserFeeds = ({users}: {users: userFeedProps[]}) => (
    <div className="user-feeds">
        {users.map((user: userType) => (
            <UserFeed {...user} isWinner={user.score === 700}/>
        ))}
    </div>
);

export default function GameView(props: any) {
    let params: any = useParams();
    const sessionId: string = params.sessionId;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(sessionId);
    }

    return (
        <div className="App">
            <SideLogo/>
            <Game {...MOCKgameState} />
            <UserFeeds users={MOCKgameState.users} />
        </div>
    )
}