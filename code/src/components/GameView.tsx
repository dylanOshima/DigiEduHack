import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import placeholder from '../imgs/person-placeholder.svg';
import crown from '../imgs/crown.svg';

import '../styles/GameView.css'

type questionProps = {
    questionText: string,
}

type answerProps = {
    onSubmit: any,
};

type userFeedProps = {
    user: string,
    score: number,
    isWinner?: boolean,
}

const Question = ({questionText}: questionProps) => (
    <div className="question">
        <h1>{questionText}</h1>
    </div>
);

const Answer = ({onSubmit}: answerProps) => (
    <form className="form-group answer"
        onSubmit={onSubmit} autoComplete="off">
        <input type="text" id="answer"
            onChange={(e) => {}}/>
        <button className="submit" type="submit">Submit</button>
    </form>
);

const UserFeed = ({ user, score, isWinner }: userFeedProps) => (
    <div className="user-feed">
        <h5 className="score">{`${score}pts`}</h5>
        <div className="feed">
            <img className="crown" src={crown}
                style={{display: isWinner ? 'block' : 'none'}} alt="crown" />
            <img className="feed" src={placeholder} alt={`${user}'s feed.`} />
        </div>
        <h5 className="username">{user}</h5>
    </div>
);

const UserFeeds = (users: any) => (
    <div className="user-feeds">
        <UserFeed user="Marco" score={1200} />
        <UserFeed user="Vitto" score={500} isWinner={true} />
        <UserFeed user="Dylan" score={200} />
        <UserFeed user="Ramzy" score={5} />
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
            <Question questionText="What is the time complexity of this super
                long function I haven't written yet?" />
            <Answer onSubmit={onSubmit} />
            <UserFeeds />
        </div>
    )
}