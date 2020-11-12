import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import Game, { gameStateType, userType, questionType } from './GameLogic';
import UserFeed, { userFeedProps } from './Userfeed';

import placeholder from '../imgs/person-placeholder.svg';
import crown from '../imgs/crown.svg';

import '../styles/GameView.css'

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
    answers: [
        {user: "Marco", answer: "123", score: 1},
        {user: "Vitto", answer: "12132113", score: 3},
        {user: "Ramzy", answer: "1333", score: -1},
    ],
    currentUser: 'Lollo',
}

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
            <UserFeed users={MOCKgameState.users} />
        </div>
    )
}