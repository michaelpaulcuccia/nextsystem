import React from 'react';
import styled from 'styled-components';
import IconWithText from '../../common/IconWithText';
import { Breakpoints } from '../../../styles/Sizes';

const Root = styled.div`
  padding: 10px;
`;

const StyledIconWithText = styled(IconWithText)`

  align-items: center;

   @media (max-width: ${Breakpoints.small}) {
    flex-direction: column;
    align-items: center;

    p {
      font-size: 26px;
      padding-left: 0;
    }

   }

`;

export default function HeaderTitle() {
  return (
    <Root>
        <StyledIconWithText
          icon='/assets/images/blackbelt.png'
          text='Brazilian Jiu Jitsu | The Gentle Art'
          textSize='32'
        />
    </Root>
  )
}
