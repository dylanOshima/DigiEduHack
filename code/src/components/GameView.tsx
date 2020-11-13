import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import Game from './GameLogic';
import UserFeed, { userFeedProps } from './Userfeed';

import '../styles/GameView.css'
import {mockGameState} from "../models/MockData";

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
            <Game {...mockGameState} />
            <UserFeed users={mockGameState.users} />
        </div>
    )
}