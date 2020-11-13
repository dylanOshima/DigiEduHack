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
import {NavBar} from "./NavBar";
import LeaderBoardView from "./LeaderBoardView";
import GameView from "./GameView";
import Video from "./Video";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <NavBar/>
                        <Logo/>
                        <div className="App-menu">
                            <Link to="/create">
                                <button>Start a Sesh</button>
                            </Link>
                            <Link to="/join">
                                <button>Join a Sesh</button>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route exact path="/create">
                    <CreateView/>
                </Route>
                <Route exact path="/join">
                    <JoinView/>
                </Route>
                <Route exact path="/session/:sessionId/leaderboard">
                    <LeaderBoardView />
                </Route>
                <Route exact path="/session/:sessionId">
                    <GameView id={"Ciao"} />
                </Route>
                <Route exact path="/test/video/">
                    <Video />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
