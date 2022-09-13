import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../../styles/Sizes';
import Flex from '../../../utils/FlexBox/Flex';

const Wrapper = styled(Flex)`

  @media (max-width: ${Breakpoints.small}) {
    flex-direction: column;   
    align-items: center;
  }
`;

export default function Nav() {
  return (
    <>
        <Wrapper justify='space-evenly'>
            <p>HOME</p>
            <p>About</p>
            <p>Contact</p>
        </Wrapper>
    </>
  )
}
