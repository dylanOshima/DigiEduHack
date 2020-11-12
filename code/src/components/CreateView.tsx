import React, {FormEvent, useEffect, useState} from "react";

import {Logo} from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";

import '../styles/JoinView.css'

export default function CreateView() {
    // const [studySet, setStudySet]: [string, (arg: string) => void] = useState("");
    const [username, setUsername]: [string, (arg: string) => void] = useState("");
    const [sessionId, setSessionId]: [string, (arg: string) => void] = useState("")

    useEffect(() => {
        fetch('/create-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json()).then(data => setSessionId(data.token))
            .catch(err => {
                console.error(err);
            })
    }, [])

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <div className="App">
            <Logo/>
            <h3>Start a new Sesh</h3>
            <form className="form-group" onSubmit={onSubmit} autoComplete="off">
                <Grid container>
                    <Grid container item spacing={1} xs={12} md={12}>
                        <Grid item md={6} xs={6}>
                            <h5>Session ID</h5>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center">
                            {sessionId}
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12} md={12}>
                        <Grid item md={6} xs={6}>
                            <h5>Your Name</h5>
                        </Grid>
                        <Grid item md={6} xs={6} className="vertical-center">
                            <TextField id="username" variant="outlined" value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
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