import React from 'react';
import {  Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';
import paper from '../assets/data-paper.pdf';
import code from '../assets/data-code.pdf';

const Styles = styled.div`
    .card {
        height: 226px;
        width: 30rem;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);
        -moz-box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);
        box-shadow: 10px 10px 5px 0px rgba(255,92,92,1);

    }
    .text-styling {
        color: black;
    }
`;

export const GamesCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Video Game Success Model</Card.Title>
                <Badge variant="primary">Jupyter Notebooks</Badge>{' '}
                <Badge variant="warning">Python</Badge>{' '}
                <Badge variant="info">Data Analysis</Badge>{' '}
                <Badge variant="info">One-hot Vector</Badge>{' '}
                <Badge variant="info">Regressors</Badge>{' '}
                <Card.Text className="text-styling">
                    Dataset analysis of Steam video games using various preprocessing and regressor techniques to calculate a future/present video game's success.
                </Card.Text>
                <div className="text-center">
                    <Button className="button-socials mr-3" target="_blank" rel="noopener noreferrer"  href={paper}>
                        <FaExternalLinkAlt />{' '}
                        Paper
                    </Button>
                    <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href={code}>
                        <FaGithub />{' '}
                        Source
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
)