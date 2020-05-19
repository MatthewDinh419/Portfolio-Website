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
export const ImageinationCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Imageination</Card.Title>
                <Badge variant="primary">Flask</Badge>{' '}
                <Badge variant="primary">Materialize</Badge>{' '}
                <Badge variant="primary">Tensorflow</Badge>{' '}
                <Badge variant="primary">Redis</Badge>{' '}
                <Badge variant="warning">Python</Badge>{' '}
                <Badge variant="warning">GCP</Badge>{' '}
                <Badge variant="warning">HTML</Badge>{' '}
                <Badge variant="warning">CSS</Badge>{' '}

                <Card.Text className="text-styling">
                    Website that outputs a caption containing descriptions of user submitted images. Uses Google’s
                    Tensorflow to create an attention based model to generate captions.
                </Card.Text>
                <div className="text-center">
                    <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/MatthewDinh419/Imageination'>
                        <FaGithub />{' '}
                        Source
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
)