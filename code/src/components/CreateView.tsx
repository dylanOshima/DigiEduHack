import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import {Logo} from "./Logo";
import {Button, Grid, TextField} from "@material-ui/core";
import Loader from 'react-loader-spinner';

import { createSession } from '../firebase';

import '../styles/JoinView.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {NavBar} from "./NavBar";

export default function CreateView() {
    // const [studySet, setStudySet]: [string, (arg: string) => void] = useState("");
    const [username, setUsername] = useState<string>("");
    const [sessionId, setSessionId]= useState<string>("")
    const [error, setError] = useState<string>("")

    const history = useHistory();
    useEffect(() => {createSession((id: any) => history.push(`/join/${id}`))}, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username);
    }
    return (
        <Grid container className="App">
            <NavBar/>
            <Logo/>
            {error ?
                <h3>{error}</h3> :
                sessionId ?
                    <React.Fragment>
                        <h3 style={{marginBottom: "2em"}}>Start a new Sesh</h3>
                        <form className="form-group" onSubmit={onSubmit} autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid container item spacing={1} xs={12} md={12}>
                                    <Grid item md={6} xs={6}>
                                        <h5>Session ID</h5>
                                    </Grid>
                                    <Grid item md={6} xs={6} className="vertical-center">
                                        {sessionId}
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={1} xs={12} md={12}>
                                    <Grid item md={6} xs={6} className="vertical-center">
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
                    </React.Fragment> : <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
            }
        </Grid>
    )
}