import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './styles/App.css';
import {Logo} from "./Logo";
import {JoinView} from "./JoinView";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Logo/>
                        <div className="App-menu">
                            <Link to="/start">
                                <button onClick={() => console.log("Hehe")}>
                                    Start a Sesh
                                </button>
                            </Link>
                            <Link to="/join">
                                <button onClick={() => console.log("U have no friends")}>
                                    <Link to="/join">Join a Sesh</Link>
                                </button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route path="/start">
                    <h1>Start Ma Dick</h1>
                </Route>
                <Route path="/join">
                    <JoinView/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
