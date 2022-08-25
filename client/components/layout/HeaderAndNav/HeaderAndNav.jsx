import React from 'react';
import HeaderBar from './HeaderBar';
import Nav from './Nav';
import Container from '../Container';

export default function HeaderAndNav() {
  return (
    <>
      <Container>
        <HeaderBar>
          <Nav/>
        </HeaderBar>
      </Container>
    </>
  )
}
