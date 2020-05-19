import React, { Component } from 'react';
import { Home } from './Home';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-scroll";

const NavNew = styled.nav`
  /* Nav bar styling */
  position: fixed;
  display: flex;
  width: 100%;
  height: 4.5%;
  background: none;
  top: 0;
  margin-bottom: 0px;
  z-index: 1000;
  color: ${props => props.black ? 'black' : 'white'};
  
  /* Nav bar items styling */
  .nav-link {
    font-size: 20px;
    &:hover {
      cursor: pointer;
      color: red;
      border-bottom: 4px solid red;
    }
  }
`;

class App extends Component {
  state = {
    black: false
  }
  componentDidMount() {
    // Will change the text color of the navbar items when the user scrolls to the next section
    document.addEventListener("scroll", () => {
      const black_boolean = window.scrollY < 1910 ? false : true;
      this.setState({ black: black_boolean });
    });
  }
  render() {
    return (
      <div>
        <NavNew black={this.state.black} className="justify-content-center">
          <Nav.Item>
            <Nav.Link as={Link} to="Home" smooth duration={750}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="Projects" smooth duration={750}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="Contact" smooth duration={750}>Links</Nav.Link>
          </Nav.Item>
        </NavNew>
        <div id="Home">
          <Home />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
