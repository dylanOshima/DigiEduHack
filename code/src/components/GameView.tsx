import React, {FormEvent, useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {SideLogo} from "./Logo";

import Game from './Game';
import UserFeed, {userFeedProps} from './Userfeed';

import '../styles/GameView.css';

import {emptyGameData, mockGameState} from "../models/MockData";
import {MenuBar} from "./MenuBar";
import {CurrentUser} from "./App";

import {subscribe} from '../firebase';
import {GameState, LocalGameState} from "../models/GameState";

export default function GameView(props: any) {
    let params: any = useParams();
    const sessionId: string = params.sessionId;
    // @ts-ignore
    const {username} = useContext(CurrentUser);
    console.log(username);
    const [game, setGame] = useState<LocalGameState>({
        ...emptyGameData,
        currentUser: {username: username, score: 0},
        users: [{username: username, score: 0}]
    });

    useEffect(() => {
        subscribe(sessionId, (gameState) => {
            setGame({...gameState, sessionID: sessionId})
        })
        console.log(game);
    }, [])

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(sessionId);
    }

    return (
        <div className="App">
            <MenuBar/>
            <Game {...game}/>
            <UserFeed users={game.users}/>
        </div>
    )
}