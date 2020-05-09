import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import programming from '../assets/programming.png';

const Styles = styled.div`
  .jumbo {
    background: url(${programming}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
const H1 = styled.div`
    position: relative;
    top: 50px;
    text-align: center;
    font-size: 80px;
`;

const P = styled.div`
    position: relative;
    top: 45px;
    margin: 0 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 150%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);

    /* Animations using css */
    animation: typewriter 2s steps(40) 1s 1 normal both,
    blinkTextCursor 500ms steps(40) infinite normal;
    @keyframes typewriter {
      from {
            width: 0;
      }
      to {
            width: 14em;
      }
    }

    @keyframes blinkTextCursor {
        from {
                border-right-color: rgba(255, 255, 255, 0.75);
        }
        to {
                border-right-color: transparent;
        }
    }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container className="text">
        <H1>Matthew Dinh</H1>
        <P>Building apps that help others...</P>
      </Container>
    </Jumbo>
  </Styles>
)