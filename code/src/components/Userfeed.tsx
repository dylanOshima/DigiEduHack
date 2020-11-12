import React from "react";

import placeholder from '../imgs/person-placeholder.svg';
import crown from '../imgs/crown.svg';

import '../styles/Userfeed.css'

export type userFeedProps = {
  username: string,
  score: number,
  isWinner?: boolean,
}

const UserFeed = ({ username, score, isWinner }: userFeedProps) => (
  <div className="user-feed">
      <h5 className="score">{`${score}pts`}</h5>
      <div className="feed">
          <img className="crown" src={crown}
              style={{display: isWinner ? 'block' : 'none'}} alt="crown" />
          <img className="feed" src={placeholder} alt={`${username}'s feed.`} />
      </div>
      <h5 className="username">{username}</h5>
  </div>
);

export default function UserFeeds({users}: {users: userFeedProps[]}) {
    return (
        <div className="user-feeds">
            {users.map((user: userFeedProps) => (
                <UserFeed {...user} isWinner={user.score === 700}/>
            ))}
        </div>
    );
};