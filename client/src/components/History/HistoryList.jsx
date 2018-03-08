import React from "react";

export const HistoryList = ({ history, friends }) => {
  let outcome;
  return (
    <div>
      <table align="center">
      <thead>
        <tr>
          <th>Outcome</th>
          <th>Time</th>
          <th>Clout</th>
          <th>Challenger</th>
          <th>Challenge ID</th>
        </tr>
        </thead>
        <tbody>
      {history.map( (hist, i) => {
        return (
          <tr key={i}>
            {hist.outcome === Number(localStorage.getItem('id')) ? <th>WIN</th> : <th>LOSS</th>}
            <th>{hist.time}</th>
            <th>{hist.clout}</th>
            {friends.forEach((friend) => {
              friend.id === hist.challenger_id ? hist.username=friend.username : null;
            })}
            <th>{hist.username}</th>
            <th>{hist.challenge_id}</th>
          </tr>
          // what's hist.receiver... ?
          // <li>
          //   <div>{outcome}</div>
          //   <div>Opponent: {hist.receiver.rows[0].username}</div>
          //   <div>Clout Earned: {hist.clout}</div>
          // </li>
        )
      })}
      </tbody>
      </table>
    </div>
  );
};
