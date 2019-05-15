// Dependencies
import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

//Components
import { Button, ButtonGroup } from "reactstrap";
import PersonalInfo from "./PersonalInfo";

// Helpers
import {
  footTrans,
  positionTrans,
  formatDate,
  calculateAge
} from "../../helpers/trans";

// Query
const GET_PLAYER = gql`
  query GetPlayer($player_id: ID!) {
    player(where: { id: $player_id }) {
      id
      nick
      imgUrl
      shirtNumber
      team {
        name
      }
      personalInfo {
        lastName
        dateOfBirth
        tel
        email
        origin
        name
        dni
      }
      from {
        placeOfBirth
        nationality
      }
      captain
      position
      foot
    }
  }
`;

const OnePlayer = ({ id }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  const { data, error, loading } = useQuery(GET_PLAYER, {
    variables: { player_id: id }
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>Error! {error.message}</div>;
  }

  const {
    shirtNumber,
    nick,
    personalInfo,
    imgUrl,
    team,
    from,
    captain,
    position,
    foot
  } = data.player;

  return (
    <React.Fragment>
      <div className="card mb-4">
        
        {/* Card Header */}
        <div className="card-header container-fluid">
          <h5 className="card-title row">
            <span className="col-4">
              {shirtNumber}. {nick}
              {captain ? (
                <span className="ml-3 badge badge-pill badge-warning">
                  Capitán
                </span>
              ) : null}
            </span>
            <span className="col-4">
              {" "}
              {personalInfo.name} {personalInfo.lastName}{" "}
            </span>
            <span className="col-4 text-danger"> team.name </span>
          </h5>
        </div>

        {/* Card Body */}
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <img
                src={imgUrl}
                alt={personalInfo.name}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-4">
              <p>
                {" "}
                <span className="text-muted">Fecha Nacimiento:</span>{" "}
                <br/>
                {formatDate(personalInfo.dateOfBirth)}{" "}
              </p>
              <p>
                {" "}
                <span className="text-muted">Edad:</span>{" "}
                {calculateAge(personalInfo.dateOfBirth)}{" "}
              </p>
              <p>
                {" "}
                <span className="text-muted">Pie:</span> {footTrans(foot)}{" "}
              </p>
              <p>
                {" "}
                <span className="text-muted">Posición:</span>{" "}
                {positionTrans(position)}{" "}
              </p>
              <p>
                {" "}
                <span className="text-muted">Club Origen:</span>{" "}
                {personalInfo.origin}{" "}
              </p>
            </div>
            <div className="col-4">
              <p>
                {" "}
                <span className="text-muted">Teléfono:</span> {personalInfo.tel}
              </p>
              <p>
                {" "}
                <span className="text-muted">E-mail:</span> {personalInfo.email}
              </p>
              <p>
                {" "}
                <span className="text-muted">NIF/DNI:</span> {personalInfo.dni}
              </p>
              <p>
                {" "}
                <span className="text-muted">Lugar Nacimiento:</span>{" "}
                {from.placeOfBirth}
              </p>
              <p>
                {" "}
                <span className="text-muted">Nacionalidad:</span>{" "}
                {from.nationality}
              </p>
            </div>
          </div>
        </div>
        
        {/* Card Footer */}
        <div className="card-footer d-flex justify-content-around">
          <ButtonGroup>
            <Button outline color="primary" onClick={() => setActiveBtn(1)} active={activeBtn === 1}>
              Personales
            </Button>
            <Button outline color="primary" size="lg" onClick={() => setActiveBtn(2)} active={activeBtn === 2}>
              Partidos
            </Button>
            <Button outline color="primary" size="lg" disabled onClick={() => setActiveBtn(3)} active={activeBtn === 3}>
              Asistencias
            </Button>
            <Button outline color="primary" size="lg" disabled onClick={() => setActiveBtn(4)} active={activeBtn === 4}>
              Informes
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {activeBtn === 1 && (
        <PersonalInfo id={id} />
      )}
      
    </React.Fragment>
  );
};

export default OnePlayer;
