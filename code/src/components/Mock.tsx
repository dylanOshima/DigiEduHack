import React from "react";

import { createSession, joinSession, getGameData } from '../firebase';

export default function Mock() {

    console.log("starting");

    createSession().then((id: string) => {
        console.log(id);
        joinSession(id, "mamma")
            .then(() => {
                getGameData(id).then((data: any) => console.log(data));
            });
    });

    return (
      <p>Ciao</p>
    )
}