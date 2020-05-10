import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import minroom from './assets/minroom.jpeg';
import { Contact } from './Contact';

const Styles = styled.div`
  .jumbo {
    background: url(${minroom});
    background-size: cover;
    -webkit-filter: blur(5px);
    filter: blur(5px);
    color: #efefef;
    height: 100vh;
    position: relative;
    z-index: -2;
    margin-bottom: 0px; 
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
    color: black;
    position: relative;
    top: 15vh;
    text-align: center;
    font-size: 80px;
`;

const P = styled.div`
    color: black;
    position: relative;
    top: 15vh;
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
                border-right-color: black;
        }
        to {
                border-right-color: transparent;
        }
    }
`;

const image_style = styled.div`
  height: 100vh;
  width: 100%;
`;
export const Home = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      {/* <div className="overlay"></div> */}
      <Container>
        <H1>Matthew Dinh</H1>
        <P>Building apps that help others...</P>
      </Container>
    </Jumbo>
  </Styles>
)