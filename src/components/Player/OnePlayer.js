// Dependencies
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

// Query
const GET_PLAYER = gql`
  query GetPlayer($player_id: ID!) {
    player(where: { id: $player_id }) {
      id
      nick
      imgUrl
      personalInfo {
        lastName
        name
        dni
      }
    }
  }
`;

const OnePlayer = ({ id }) => {
  const { data, error, loading } = useQuery(GET_PLAYER, {
    variables: { player_id: id }
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>Error! {error.message}</div>;
  }

  const { nick, personalInfo, imgUrl } = data.player;
  return (
    <ul name="OnePlayer">
      <img src={imgUrl} style={{ height: 100, width: 100 }} />
      <li>
        Name: {personalInfo.name} {personalInfo.lastName}
      </li>
      <li>Nick: {nick}</li>
      <li>DNI: {personalInfo.dni}</li>
    </ul>
  );
};

export default OnePlayer;
