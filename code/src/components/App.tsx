import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../styles/App.css';
import {Logo} from "./Logo";
import JoinView from "./JoinView";
import CreateView from "./CreateView";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <Logo/>
                        <div className="App-menu">
                            <Link to="/start">
                                <button>Start a Sesh</button>
                            </Link>
                            <Link to="/join">
                                <button>Join a Sesh</button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route path="/start">
                    <CreateView/>
                </Route>
                <Route path="/join">
                    <JoinView/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
