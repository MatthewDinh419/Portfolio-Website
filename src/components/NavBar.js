import React from 'react';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Styles = styled.div`
.nav {
  position: fixed;
  display: flex;
  width: 100%;
  height: 4.5%;
  opacity: 0.7;
  background-color: white;
  top: 0;
}
/* Changes the color of the nav menu item's text color and hover color */
.nav-link {
  font-size: 16px;
  color: black;
  &:hover {
    color: red;
    border-bottom: 4px solid red;
  }
}
.navitem:global(.active) {
  background-color: red;
  border-bottom: 4px solid red;
}
`;

export const NavigationBar = () => (
  <Styles>
    <Nav className="justify-content-center" activeKey={Nav.activeKey}>
      <Nav.Item>
        <Nav.Link eventKey={1}><Link to="Home" smooth duration={750}>Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey={2}><Link to="Contact" smooth duration={750}>Contact</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  </Styles>
)