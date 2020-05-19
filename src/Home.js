import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import lightbulb from './assets/lightbulb.jpg';
import './index.css'
import Fade from 'react-reveal/Fade';

const Styles = styled.div`
  .jumbo {
    background: url(${lightbulb}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #efefef;
    height: 100vh;
    position: relative;
    z-index: -2;
    margin-bottom: 0px; 
  }
  /* Used potentially if wanting to create an opacity layer over jumbo image */
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  /* Creates a container that is from the left of the page to the left edge of the lightbulb */
  .secondary-container {
    position: absolute;
    top: 35%;
    width: 54%;
    height: 100vh;
  }
  /* Distance between the description text and red horizontal line */
  .line-spacing {
    margin-bottom: 40px;
  }
`;

// Name text styling
const H1 = styled.div`
    color: white;
    font-size: 80px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

// Horizontal red line styling
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 4,
          width: 50,
      }}
  />
);

// Typewriter effect text
const P = styled.div`
    color: white;
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin: 0 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 150%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
    height: 30px;
    /* Animations using css */
    animation: typewriter 2s steps(40) 0.5s 1 normal both,
    blinkTextCursor 750ms steps(40) infinite normal;
    @keyframes typewriter {
      from {
            width: 0;
      }
      to {
            width: 14em;
      }
    }

    @keyframes blinkTextCursor {
        from {
                border-right-width: 10px;
                border-right-color: white;
        }
        to {
                border-right-width: 10px;
                border-right-color: transparent;
        }
    }
`;

export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="secondary-container">
        <Fade cascade>
        <Row className="justify-content-md-center">
            <Col className="text-center">
              <H1>Matthew Dinh</H1>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="line-spacing">
              <ColoredLine color="red" />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="text-center">
              <P>Building apps that help others</P> 
            </Col>
        </Row>
        </Fade>
      </div>
    </Jumbo>
  </Styles>
)