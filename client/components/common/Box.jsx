import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    margin: 5px 0;
    padding: 15px;
    border: 4px solid ${props => props.borderColor};
`;

export default function Box( { children, borderColor }) {
  return (
    <Root borderColor={borderColor}>
        {children}
    </Root>
  )
}
