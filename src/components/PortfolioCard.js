import React from 'react';
import {  Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Styles = styled.div`
    .text-styling {
        color: black;
    }
`;
export const PortfolioCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Portfolio Website</Card.Title>
                <Badge variant="primary">React Bootstrap</Badge>{' '}
                <Badge variant="primary">Styled Components</Badge>{' '}
                <Badge variant="warning">Javascript</Badge>{' '}
                <Badge variant="warning">CSS</Badge>{' '}
                <Badge variant="warning">HTML</Badge>{' '}
                <Badge variant="warning">JSX</Badge>{' '}
                <Card.Text className="text-styling">
                    This website! Built with React Bootstrap as the front-end framework and styled components for enhancing the CSS for styling React components.
                </Card.Text>
                <div className="text-center">
                    <Button className="button-socials mr-3" target="_blank" rel="noopener noreferrer"  href='http://localhost:3000/'>
                        <FaExternalLinkAlt />{' '}
                        Demo
                    </Button>
                    <Button className="button-socials" target="_blank" rel="noopener noreferrer"  href='https://github.com/MatthewDinh419/Portfolio-Website'>
                        <FaGithub />{' '}
                        Source
                    </Button>
                </div>
            </Card.Body>
        </Card>
    </Styles>
)