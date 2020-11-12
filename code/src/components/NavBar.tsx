import React from "react";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "../styles/App.css"

export const NavBar = () => {
    return (
        <Grid container item spacing={1} className="nav-bar">
            <Grid item md={2} xs={2}><Link to="/">StudySesh</Link></Grid>
            <Grid item md={2} xs={2}><Link to="/create">Create Sesh</Link></Grid>
            <Grid item md={2} xs={2}><Link to="/join">Join Sesh</Link></Grid>
        </Grid>
    )
}