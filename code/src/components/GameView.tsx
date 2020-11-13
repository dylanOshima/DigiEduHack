import React, {FormEvent, useContext, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";

import Game from './GameLogic';
import UserFeed, { userFeedProps } from './Userfeed';

import '../styles/GameView.css';

import {mockGameState} from "../models/MockData";
import {MenuBar} from "./MenuBar";
import {CurrentUser} from "./App";

export default function GameView(props: any) {
    let params: any = useParams();
    const sessionId: string = params.sessionId;

    // @ts-ignore
    const {username, setUsername} = useContext(CurrentUser);
    console.log(username);
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(sessionId);
    }

    return (
        <div className="App">
            <MenuBar/>
            <Game {...mockGameState} />
            <UserFeed users={mockGameState.users} />
        </div>
    )
}