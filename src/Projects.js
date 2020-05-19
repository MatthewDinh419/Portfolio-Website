import React from 'react';
import { Jumbotron as Jumbo, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './index.css'
import lantern from './assets/lanterns.jpg';
import { PortfolioCard } from './components/PortfolioCard';
import { GamesCard } from './components/GamesCard';
import { CapstoneCard } from './components/CapstoneCard';
import { ResourceCard } from './components/ResourceCard';
import { ImageinationCard } from './components/ImageinationCard';
import { CandyCard } from './components/CandyCard';

import Fade from 'react-reveal/Fade';

const Styles = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
    .jumbo {
        /* background-color: #393b40; */
        background: url(${lantern}) no-repeat;
        background-size: cover;
        background-attachment: fixed;
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
    /* Space between navbar items and card */
    .top-row-spacing {
        margin-top: 100px;
    }
    /* Space between rows */
    .bot-row-spacing {
        margin-top: -500px;
    }
    .btn-group {
        height: 50px;
    }
    .button {
        outline: none;
    }
    .button-switch {
        background-color: #656c70;
        border-color: black;

        &:hover {
        background-color: #939da3;
    }
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

export const Projects = () => {
    // Will change the text color of the navbar items when the user scrolls to the next section
    function PageOne() {
        document.getElementById("pagetwo").style.display="none";
        document.getElementById("pageone-rowone").style.display="flex";
        document.getElementById("pageone-rowtwo").style.display="flex";
        document.getElementById("pag1").style.active=true;
        document.getElementById("pag2").style.active=false;
    }
    function PageTwo() {
        document.getElementById("pageone-rowone").style.display="none";
        document.getElementById("pageone-rowtwo").style.display="none";
        document.getElementById("pagetwo").style.display="flex";
        document.getElementById("pag1").style.active=false;
        document.getElementById("pag2").style.active=true;
    }
  return(
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
                    <Row className="justify-content-md-center top-row-spacing" id="pagetwo" style={{ display: "none" }}>
                        <Fade right>
                            <Col>
                                <ResourceCard />
                            </Col>
                            <Col>
                                <CandyCard />
                            </Col>
                        </Fade>
                    </Row>
                    <Row className="justify-content-md-center top-row-spacing" id="pageone-rowone">
                        <Fade right>
                            <Col>
                                <PortfolioCard />
                            </Col>
                            <Col>
                                <CapstoneCard />
                            </Col>
                        </Fade>
                    </Row>
                    <Row className="justify-content-md-center bot-row-spacing" id="pageone-rowtwo">
                        <Fade right>
                            <Col>
                                <GamesCard />
                            </Col>
                            <Col>
                                <ImageinationCard />
                            </Col>
                        </Fade>
                    </Row>
                    <Row className="justify-content-md-center bot-row-spacing">
                        <ButtonGroup>
                            <Button className="button-switch" onClick={() => PageOne()}>1</Button>
                            <Button className="button-switch" onClick={() => PageTwo()}>2</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </Jumbo>
    </Styles>
    );
};