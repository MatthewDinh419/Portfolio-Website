import React from 'react';
import {  Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

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
export const ResourceCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Resource Library</Card.Title>
                <Badge variant="primary">React</Badge>{' '}
                <Badge variant="primary">Laravel</Badge>{' '}
                <Badge variant="warning">PHP</Badge>{' '}
                <Badge variant="warning">SQL</Badge>{' '}
                <Badge variant="warning">CSS</Badge>{' '}
                <Badge variant="warning">JSX</Badge>{' '}
                <Badge variant="warning">HTML</Badge>{' '}

                <Card.Text className="text-styling">
                    A crowdsourced website that provides and ranks resources for seached about topics. Users are able to recommend resources for a topic, and vote for other topics' resources helpfulness.
                </Card.Text>
                <div className="text-center">
                    <Button className="button-socials mr-3" target="_blank" rel="noopener noreferrer"  href='https://jon-cuboulder.github.io/csci3308GroupProject/'>
                        <FaExternalLinkAlt />{' '}
                        Demo
                    </Button>
                    <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/jon-cuboulder/csci3308GroupProject'>
                        <FaGithub />{' '}
                        Source
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
)