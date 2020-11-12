import React, {FormEvent, useState} from "react";
import { useParams } from 'react-router-dom';
import { SideLogo } from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import '../styles/JoinView.css'

const userFeed = ({user: string, }) => (
    <div className="user-feed">
        <h5 className="score"></h5>
        <div className="feed"></div>
        <h5 className="username"></h5>
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
            <h3>Join a Sesh</h3>
            <form className="form-group" onSubmit={onSubmit} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid container item spacing={1} xs={12} md={12}>
                        <Grid item md={6} xs={6}>
                            <h5>Sesh Number</h5>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center">
                            <TextField id="sessionId" variant="outlined" value={sessionId}
                                       onChange={(e) => {}}/>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={2} xs={12} md={12}>
                        <Grid item md={6} xs={6}>
                            <h5>Your Name</h5>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center">
                            <TextField id="username" variant="outlined" value={"username"}
                                       onChange={(e) => {}}/>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12} className="App-menu">
                        <button className="submit" type="submit"> Join</button>
                    </Grid>
                </Grid>
                <Button/>
            </form>
        </div>
    )
}