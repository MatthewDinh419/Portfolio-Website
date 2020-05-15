import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './index.css'
import lantern from './assets/lanterns.jpg';
import { PortfolioCard } from './components/PortfolioCard';
import Fade from 'react-reveal/Fade';

const Styles = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    .jumbo {
        /* background-color: #393b40; */
        background: url(${lantern}) no-repeat;
        background-size: cover;
        height: 100vh;
        z-index: -2;
        margin-bottom: 0px; 
    }
    .overlay {
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
  }
    .row {
        height: 100%;
    }
    .col-right-margins {
        margin-left: -40px;
        margin-right: 30px;
    }
    .card-img {
        width: 100%;
        height: 200px;
    }
    .button-socials {
        color: black;
        background-color: #e0e0e0;
        /* background-color: #2F7AE5; */
        border-style: hidden;
        
        &:hover {
            /* background-color: #5997f0; */
            background-color: #ededed;
            border-style: hidden;
        }
    }
    .card {
        width: 30rem;
        -webkit-box-shadow: 7px 7px 8px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 7px 7px 8px 0px rgba(0,0,0,0.75);
        box-shadow: 7px 7px 8px 0px rgba(0,0,0,0.75);
    }
    /* Space between navbar items and card */
    .top-row-spacing {
        margin-top: 100px;
    }
    /* Space between rows */
    .bot-row-spacing {
        margin-top: -500px;
    }
`;

// Projects text styling
const H1 = styled.h1`
    color: white;
    font-size: 60px;
    font-weight: bold;
    font-family: 'Roboto';
    margin-top: 340px;
    margin-left: 200px;
`;

// Horizontal red line
const ColoredLine = styled.hr `
    color: red;
    height: 4px;
    width: 50px;
    margin-left: 200px;
`;

export const Projects = () => (
  <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay" />
        <Row className="justify-content-md-center">
            <Col lg="5">
                <Fade left>
                <H1>Projects</H1>
                <ColoredLine color="red" />
                </Fade>
            </Col>
                <Col className="col-right-margins">
                    <Row className="justify-content-md-center top-row-spacing">
                        <Fade right>
                            <Col>
                                <PortfolioCard />
                            </Col>
                            <Col>
                                <PortfolioCard />
                            </Col>
                        </Fade>
                    </Row>
                    <Row className="justify-content-md-center bot-row-spacing">
                        <Fade right>
                            <Col>
                                <PortfolioCard />
                            </Col>
                            <Col>
                                <PortfolioCard />
                            </Col>
                        </Fade>
                    </Row>
                </Col>
        </Row>
      </Jumbo>
  </Styles>
)