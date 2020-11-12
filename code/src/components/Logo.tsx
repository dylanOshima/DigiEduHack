import React from "react";

import LogoPng from '../imgs/logo.png';

export const Logo = () => (
    <header className="App-header">
        <h1>StudySesh</h1>
    </header>
);


export const SideLogo = () => (
    <img className="App-side-logo" src={LogoPng} alt="Logo" />
);
