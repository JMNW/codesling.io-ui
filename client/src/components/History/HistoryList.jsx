import React from "react";

export const HistoryList = ({ history }) => {
  let outcome;
  return (
    <div>
      <table align="center">
        <tr>
          <th>Outcome</th>
          <th>Time</th>
          <th>Clout</th>
          <th>Challenger</th>
          <th>Challenge ID</th>
        </tr>
      {history.map(hist => {
        return (
          <tr>
            <th>{hist.outcome}</th>
            {hist.outcome ? <th>WIN</th> : <th>LOSS</th>}
            {/* <th>{hist.time}</th> */}
            <th>{hist.clout}</th>
            <th>{hist.challenger_id}</th>
            <th>{hist.challenge_id}</th>
          </tr>
          // <li>
          //   <div>{outcome}</div>
          //   <div>Opponent: {hist.receiver.rows[0].username}</div>
          //   <div>Clout Earned: {hist.clout}</div>
          // </li>
        );
      })}
      </table>
    </div>
  );
};
