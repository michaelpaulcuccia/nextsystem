import React from 'react';
import styled from 'styled-components';
import Flex from '../../utils/FlexBox/Flex';

const Root = styled(Flex)`
    width: fit-content;
    
    p {
        padding-left: 8px;
        font-size: ${props => props.textSize}px;
    }
`;

export default function IconWithText( { icon, text, textSize}) {
  return (
    <Root
        alignItems='center'
        textSize={textSize}
    >
        <img src={icon} alt='' />
        <p>{text}</p>
    </Root>
  )
}

IconWithText.defaultProps = {
    textSize: '18',
}