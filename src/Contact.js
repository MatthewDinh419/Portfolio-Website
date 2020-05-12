import React from 'react';
import { Row, Col, Button, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import mincoffee from './assets/mincoffee.jpeg';
import { FaGithub, FaRegEnvelope, FaLinkedin, FaGripLinesVertical } from 'react-icons/fa';

const Styles = styled.div`
  .jumbo {
    background: url(${mincoffee}) no-repeat;
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
    width: 60%;
    padding-top: 200px;
    .row-center {
        padding-top: 25px;
    }
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
`;

export const Contact = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <SecondaryWrapper>
                <H1>Contact</H1>
                <Row className="justify-content-md-center row-center">
                    <Col className="text-center" md={{span: 2}}>
                        <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/matthewdinh419'><FaGithub size="5rem"/></Button>
                    </Col>
                    <Col className="text-center" md={{span: 2}}>
                        <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://www.linkedin.com/in/matthew-dinh-b1816315b/'><FaLinkedin size="5rem"/></Button>
                    </Col>
                    <Col className="text-center" md={{span: 2}}>
                        <Button className="button-socials" href='mailto:matthewdinhproductions@gmail.com'><FaRegEnvelope size="5rem"/></Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center row-center">
                    <Col className="text-center row-text" md={{span: 2}}><b>GitHub</b></Col>
                    <Col className="text-center row-text" md={{span: 2}}><b>Linkedin</b></Col>
                    <Col className="text-center row-text" md={{span: 2}}><b>Email</b></Col>
                </Row>
            </SecondaryWrapper>
        </Jumbo>
  </Styles>
)