// Dependencies
import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

import OnePlayer from "./OnePlayer";

// Query
const GET_PLAYERS = gql`
  query GetPlayers{
    players {
      id
      nick
      shirtNumber
      position
    }
  }
`;

const PlayerList = () => {
  const [playerId, setPlayerId] = useState("");

  const { data, error, loading } = useQuery(GET_PLAYERS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>Error! {error.message}</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ul style={{ width: "50%" }}>
        {data.players.map(player => (
          <li key={player.id} onClick={() => setPlayerId(player.id)}>
            {player.position} | {player.nick} n.{player.shirtNumber}
          </li>
        ))}
      </ul>
      {playerId && (
        <span style={{ width: "50%" }}>
          <OnePlayer id={playerId} />
        </span>
      )}
    </div>
  );
};

export default PlayerList;
