import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-scroll";

const Styles = styled.div`
/* Fixed top and styling options for nav bar */
.nav {
  position: fixed;
  display: flex;
  width: 100%;
  height: 4.5%;
  opacity: 0.7;
  background-color: white;
  top: 0;
  margin-bottom: 0px;
  /* Make sure that the nav bar is on top of everything else */
  z-index: 1000;
}
/* Changes the color of the nav menu item's text color and hover color */
.nav-link {
  font-size: 16px;
  color: black;
  &:hover {
    cursor: pointer;
    color: red;
    border-bottom: 4px solid red;
  }
}
`;

export const NavigationBar = () => (
  <Styles>
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link as={Link} to="Home" smooth duration={750}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link as={Link} to="Contact" smooth duration={750}>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  </Styles>
)