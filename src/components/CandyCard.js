import React from 'react';
import {  Card, Badge, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
    .card {
        width: 30rem;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);
        -moz-box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);
        box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);
    }
    .text-styling {
        color: black;
    }
`;
export const CandyCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Settler's of Candy</Card.Title>
                <Badge variant="primary">QTCreator</Badge>{' '}
                <Badge variant="warning">C++</Badge>{' '}
                <Badge variant="info">AI</Badge>{' '}
                <Badge variant="info">OOD Patterns</Badge>{' '}

                <Card.Text className="text-styling">
                    A Settler's of Catan remake except with candy as the theme. Has working AI and uses a variety of object oriented design patterns.
                </Card.Text>
                <div className="text-center">
                    <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/MatthewDinh419/Settlers_of_Candy'>
                        <FaGithub className="mb-1"/>{' '}
                        Source
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
)