import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        console.log('shit')
        fetch('/time').then(res => {console.log(res); return res.json()}).then(data => {
            console.log(data)
            setCurrentTime(data.time);
        });
    }, [])

    return (
        <div className="App">
            <h1>
                SexyLogoHere
            </h1>
            <h3>The Time is {currentTime}</h3>
        </div>
    );
}

export default App;
