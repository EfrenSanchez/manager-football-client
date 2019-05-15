//Dependencies
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

// Query
const GET_INFO = gql`
  query GetInfo($player_id: ID!) {
    player(where: { id: $player_id }) {
      id
      from {
        address
        number
        town
        province
        countruy
        PC
        placeOfBirth
        nationality
        extra
      }
      sizes {
        clothing
        step
      }
      personalInfo {
        status
        childs
        brothers
        poscBrothers
        clubBrothers
      }
    }
  }
`;

const PersonalInfo = ({ id }) => {
  const { data, error, loading } = useQuery(GET_INFO, {
    variables: { player_id: id }
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>Error! {error.message}</div>;
  }

  const {
    personalInfo,
    sizes,
    from
  } = data.player;

  return (
    <React.Fragment>
    <div className="alert alert-success mt-5" role="alert">
      Datos Personales
    </div>  
    <div className="card">
      {/* Card Header */}
      <div className="card-header">
        <h6> Datos Personales </h6>
      </div>
      {/* Card Body */}
      <div className="card-body">
        <div className="row">
        <div className="col-6">
          <p>
            <span className="text-muted">Dirección: </span>
            {from.address}
          </p>
          <p>
            <span className="text-muted">Localidad: </span>
            {from.town}
          </p>
          <p>
            <span className="text-muted">Provincia: </span>
            {from.province}
          </p>        
          <p>
            <span className="text-muted">Pais: </span>
            {from.country}
          </p>
          <p>
            <span className="text-muted">Codigo Postal: </span>
            {from.PC}
          </p>
          <p>
            <span className="text-muted">Talla Ropa: </span> 
            {sizes.clothing}
          </p>
          <p>
            <span className="text-muted">Talla Pie: </span> 
            {sizes.step}
          </p>
        </div>
        <div className="col-6">
          <p>
            <span className="text-muted">Estado Civil: </span>
            {personalInfo.status}    
          </p>
          <p>
            <span className="text-muted">Hijos: </span>
            {personalInfo.childs}
          </p>
          <p>
            <span className="text-muted">Hermanos: </span>
            {personalInfo.brothers}
          </p>
          <p>
            <span className="text-muted">Posición entre Hermanos: </span> 
            {personalInfo.poscBrothers}
          </p>
          <p>
            <span className="text-muted">Hermanos en el Club: </span> 
            {personalInfo.clubBrothers}
          </p>  
        </div>
      </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default PersonalInfo;