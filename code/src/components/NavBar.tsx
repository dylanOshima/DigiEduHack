import React from "react";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "../styles/App.css"
import {SideLogo} from "./Logo";

export const NavBar = () => {
    return (
        <Grid container item className="nav-bar">
            <Grid item md={2} xs={2}><Link to="/"><SideLogo/></Link></Grid>
            <Grid item md={2} xs={2} className="nav-bar-item"><Link to="/create">Start Sesh</Link></Grid>
            <Grid item md={2} xs={2} className="nav-bar-item"><Link to="/join">Join Sesh</Link></Grid>
        </Grid>
    )
}