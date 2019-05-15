// Dependencies
import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

//Components
import OnePlayer from "./OnePlayer";
import { Table, Button } from "reactstrap";

//Helpers
import { positionTrans } from "../../helpers/trans";

//Styles 
import "./PlayerList.css";

// Query
const GET_PLAYERS = gql`
  query GetPlayers {
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
    return (
      <div>Loading...</div>
    );
  }
  if (error) {
    return <div style={{ color: "red" }}>Error! {error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <h3>Ficha de Jugador</h3>
        </div>
        <div className="col-8 text-center">
          <Button outline color="primary" onClick={() => console.log(playerId)} >Editar Datos</Button>
          <Button outline color="primary" disabled >Añadir Jugador</Button>
          <Button outline color="primary" disabled >Baja de Jugador</Button>
          <Button outline color="primary" disabled >Imprimir</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        {/* Player Table */}
        <div className="col-4 card h-100">
          <Table size="sm">
            <thead>
              <tr>
                <th> Dorsal </th>
                <th> Nombre </th>
                <th> Posición </th>
              </tr>
            </thead>
            <tbody>
              {data.players.map(player => (
                <tr className="table-row" key={player.id} onClick={() => setPlayerId(player.id)}>
                  <th scope="row" className="pl-3"> {player.shirtNumber} </th>
                  <td> {player.nick} </td>
                  <td> {positionTrans(player.position)} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Player Card */}
        {playerId
          ? 
          <div className="col-8 h-100">
            <OnePlayer id={playerId} />
          </div>
          :
          <div>
            <h3>Vacio</h3>
          </div>
        }
      </div>
    </div>
  );
};

export default PlayerList;
