import React from "react";

import placeholder from '../imgs/person-placeholder.svg';
import crown from '../imgs/crown.svg';

import '../styles/Userfeed.css'
import {User} from "../models/User";

export interface userFeedProps extends User {
  isWinner?: boolean,
}

export const UserFeed = ({ username, score, isWinner }: userFeedProps) => (
  <div className="user-feed">
      <h4 className="score" style={{marginBottom: "1.5em"}}>{`${score}pts`}</h4>
      <div className="feed">
          <img className="crown" src={crown}
              style={{display: isWinner ? 'block' : 'none'}} alt="crown" />
          <img className="feed" src={placeholder} alt={`${username}'s feed.`} />
      </div>
      <h5 className="username">{username}</h5>
  </div>
);

export default function UserFeeds({users}: {users: userFeedProps[]}) {
    const winner = users.sort((a, b) => (b.score - a.score))[0];
    return (
        <div className="user-feeds">
            {users.map((user: userFeedProps) => (
                <UserFeed key={user.username} {...user} isWinner={user.username === winner.username}/>
            ))}
        </div>
    );
};
