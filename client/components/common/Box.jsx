import React from 'react';
import styled from 'styled-components';
import Flex from '../../utils/FlexBox/Flex';
import { Palette } from '../../styles/Palette';

const Root = styled(Flex)`
  margin: 5px 0;
  padding: 15px;
  border: 4px solid ${props => props.borderColor};
  border-radius: 8px;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

export default function Box( { children, borderColor }) {
  return (
    <Root 
      borderColor={borderColor}
      direction='column'
      alignItems='center'
    >
      <ContentContainer
        direction='column'
        alignItems='center'
      >
        {children}
      </ContentContainer>
    </Root>
  )
}

Box.defaultProps = {
  borderColor: Palette.whiteSmoke
}