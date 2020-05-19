import React from 'react';
import {  Card, Badge } from 'react-bootstrap';
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

export const CapstoneCard = () => (
    <Styles>
        <Card bg="light" border="dark">
            <Card.Body>
                <Card.Title className="text-center text-styling">Blockchain Capstone</Card.Title>
                <Badge variant="primary">Ethereum</Badge>{' '}
                <Badge variant="primary">Raft</Badge>{' '}
                <Badge variant="primary">Raspberry Pi</Badge>{' '}
                <Badge variant="primary">Ansible</Badge>{' '}
                <Badge variant="warning">Solidity</Badge>{' '}
                <Badge variant="warning">C</Badge>{' '}
                <Badge variant="warning">Python</Badge>{' '}
                <Card.Text className="text-styling">
                    Software licenses management using the Ethereum blockchain technology as well as an implementation using a custom made blockchain for Festo Company. 
                    Since it was made for Festo Company, the code is unavailable for the public.
                </Card.Text>
            </Card.Body>
        </Card>
    </Styles>
)