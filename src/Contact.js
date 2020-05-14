import React from 'react';
import { Row, Col, Button, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import contact_city from './assets/contact-city.jpg';
import { FaGithub, FaRegEnvelope, FaLinkedin } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import './index.css';

const Styles = styled.div`
  .jumbo {
    background: url(${contact_city}) no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    margin-bottom: 0;
  }
  .button-socials {
    color: white;
    background-color: #2F7AE5;
    border-style: hidden;
    
    &:hover {
        background-color: #5997f0;
        border-style: hidden;
  }
  }
`;

const SecondaryWrapper = styled.section`
    padding-top: 150px;
    overflow: hidden;
    /* Adjusts distance between Contact text and buttons */
    .row-center {
        padding-top: 25px;
    }
    /* Adjusts distance between button and button descriptions */
    .row-text {
        margin-top: -18px;
    }
`;

// Contact text styling
const H1 = styled.h1`
    color: black;
    position: relative;
    text-align: center;
    margin-right: 15px;
    font-size: 80px;
    font-weight: bold;
    font-family: 'Roboto';
`;

export const Contact = () => {
    return(
        <Styles>
            <Jumbo fluid className="jumbo">
                <SecondaryWrapper>
                    <H1>Contact</H1>
                    <Fade bottom>
                    <Row className="justify-content-md-center row-center">
                        <Col className="text-center" md={{span: 1}}>
                            <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/matthewdinh419'><FaGithub size="5rem"/></Button>
                        </Col>
                        <Col className="text-center" md={{span: 1}}>
                            <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/matthew-dinh-b1816315b/'><FaLinkedin size="5rem"/></Button>
                        </Col>
                        <Col className="text-center" md={{span: 1}}>
                            <Button className="button-socials" href='mailto:matthewdinhproductions@gmail.com'><FaRegEnvelope size="5rem"/></Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center row-center">
                        <Col className="text-center row-text" md={{span: 1}}><b>GitHub</b></Col>
                        <Col className="text-center row-text" md={{span: 1}}><b>Linkedin</b></Col>
                        <Col className="text-center row-text" md={{span: 1}}><b>Email</b></Col>
                    </Row>
                    </Fade>
                </SecondaryWrapper>
            </Jumbo>
    </Styles>
    );
};