import React from "react";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "../styles/App.css"
import {SideLogo} from "./Logo";

export const MenuBar = () => {
    return (
        <Grid container item sm={12} md={12}>
            <Grid item md={2} xs={2}><Link to="/"><SideLogo/></Link></Grid>
        </Grid>
    )
}