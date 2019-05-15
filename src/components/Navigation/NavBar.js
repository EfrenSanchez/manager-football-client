//Dependencies
import React from "react";
import { NavLink } from 'react-router-dom'

//Components
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//Styles
import "./NavBar.css";

//Assets
import Emoji from "../Assets/Emoji";

const NavBar = () => {
  return (
    <Navbar color="light" light expand="md" >
      <NavbarBrand className="ml-3" href="/">Team Logo</NavbarBrand>
      <Nav navbar>
        
        {/* Jugador */}
        <UncontrolledDropdown nav inNavbar className="ml-5">
          <DropdownToggle nav caret>
           <Emoji symbol="👤" label="jugadores"/> Jugadores
          </DropdownToggle>
          <DropdownMenu right>
            
            <NavLink to="/fichas-jugadores"> 
              <DropdownItem>
              Ficha Jugadores
              </DropdownItem>
            </NavLink>

            <DropdownItem disabled>Asistencias</DropdownItem>

            <NavLink to="/baja-jugadores"> 
              <DropdownItem>
                Baja Jugadores
              </DropdownItem>
            </NavLink>

            <DropdownItem divider />
            <DropdownItem disabled>
              <Emoji symbol="📊" label="jugadores" /> Estadísticas
            </DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>

        {/* Competicion */}
        <UncontrolledDropdown nav inNavbar className="ml-2">
          <DropdownToggle nav caret>
            <Emoji symbol="⚽" label="jugadores" /> Competición
          </DropdownToggle>
          <DropdownMenu right>
          
            <NavLink to="/liga"> 
              <DropdownItem>
                Liga
              </DropdownItem>
            </NavLink>

            <NavLink to="/amistosos">
              <DropdownItem>
                Amistosos 
              </DropdownItem>
            </NavLink>

            <NavLink to="/nuevo-partido">
              <DropdownItem>
                Nuevo Partido 
              </DropdownItem>
            </NavLink>

            <DropdownItem divider />
            <DropdownItem disabled>
              <Emoji symbol="📊" label="jugadores" /> Estadísticas
            </DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
