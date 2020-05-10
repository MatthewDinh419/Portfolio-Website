import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import programming from './assets/programming.png';

const Styles = styled.div`
  .jumbo {
    background: url(${programming});
    background-size: cover;
    color: #efefef;
    height: 100vh;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Contact = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Contact</h1>
      </Container>
    </Jumbo>
  </Styles>
)