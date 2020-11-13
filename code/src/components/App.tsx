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
                <Route path="/create">
                    <CreateView/>
                </Route>
                <Route path="/join">
                    <JoinView/>
                </Route>
                <Route path="/:sessionId/leaderboard">
                    <LeaderBoardView />
                </Route>
                <Route path="/session/:sessionId">
                    <GameView id={"Ciao"} />
                </Route>
                <Route path="/test/video/">
                    <Video />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
