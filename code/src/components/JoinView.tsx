import React, {FormEvent, useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Logo} from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import { joinSession } from '../firebase';

import '../styles/JoinView.css'
import {NavBar} from "./NavBar";
import {CurrentUser} from "./App";

export default function JoinView() {
    const [sessionId, setSessionId] = useState<string>("");
    // @ts-ignore
    const {username, setUsername} = useContext(CurrentUser);
    const history = useHistory();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(sessionId);
        console.log(username);
        joinSession(sessionId, username).then(() => history.push(`/session/${sessionId}`));
    }
    return (
        <Grid container className="App">
            <NavBar/>
            <Logo/>
            <h3 style={{marginBottom: "2em"}}>Join a Sesh</h3>
            <form className="form-group" onSubmit={onSubmit} autoComplete="off">
                <Grid container spacing={4}>
                    <Grid container item spacing={1} xs={12} md={12}>
                        <Grid item md={6} xs={6} className="vertical-center">
                            <h4>Session ID</h4>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center answer">
                            <input id="sessionId" type="text" className="card" value={sessionId}
                                   onChange={(e) => setSessionId(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} md={12}>
                        <Grid item md={6} xs={6} className="vertical-center">
                            <h4>Your Name</h4>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center answer">
                            <input id="username" type="text" className="card" value={username}
                                   onChange={(e) => setUsername(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12} className="App-menu">
                        <button className="submit" type="submit"> Join</button>
                    </Grid>
                </Grid>
                <Button/>
            </form>
        </Grid>
    )
}