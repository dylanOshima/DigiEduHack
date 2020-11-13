import React, { useEffect } from "react";

import { createSession, joinSession, getGameData, subscribe } from '../firebase';

const doIt = () => {
    createSession().then((id: string) => {
        console.log(id);
        joinSession(id, "mamma")
            .then(() => {
                getGameData(id).then((data: any) => console.log(data));
            });
    });

    subscribe("dsxsetkr", (game) => console.log(game));
};

export default function Mock() {
    console.log("starting");

    useEffect(doIt, []);

    return (
      <p>Ciao</p>
    )
}