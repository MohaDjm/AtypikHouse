import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff5a5f;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  margin-left: 1rem;

  a {
    text-decoration: none;
    color: #333;
  }

  a.active {
    color: #ff5a5f;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>AtypikHouse</NavBrand>
      <NavList>
        <NavListItem>
          <NavLink to="/home" activeClassName="active">Accueil</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/about" activeClassName="active">À propos</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/accomodation" activeClassName="active">Hébergements</NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
