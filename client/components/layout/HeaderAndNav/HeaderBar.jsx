import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background:
        linear-gradient(red, transparent),
        linear-gradient(to top left, lime, transparent),
        linear-gradient(to top right, blue, transparent);
    background-blend-mode: screen;
    height: 200px;
`;

export default function HeaderBar({children}) {
  return (
    <>
        <Wrapper>
            {children}
        </Wrapper>
    </>
  )
}
