import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  margin: '10px',
  background: 'red',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  textDecoration: 'none'
}

const NavBar = () => {
  return (
    <div className="navbar">

      <NavLink to="/" style={link} activeStyle={{ background: 'darkred' }} exact>Home</NavLink>
      <NavLink to="/movies" style={link} activeStyle={{ background: 'darkred' }} exact>Movies</NavLink>
      <NavLink to="/actors" style={link} activeStyle={{ background: 'darkred' }} exact>Actors</NavLink>
      <NavLink to="/directors" style={link} activeStyle={{ background: 'darkred' }} exact>Directors</NavLink>

    </div>
  );
};

export default NavBar;
