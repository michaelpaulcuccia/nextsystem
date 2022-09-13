import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderNav from './Nav';
import Container from '../Container';

export default function HeaderAndNav() {
  return (
    <div className='full-bleed'>
      <Container>
        <HeaderTitle />
        <HeaderNav/>
      </Container>
    </div>
  )
}
