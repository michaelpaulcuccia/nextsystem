import React from 'react';
import styled from 'styled-components';
import Flex from '../../utils/FlexBox/Flex';

const Root = styled(Flex)`
    
    p {
        padding-left:  ${props => props.pPadding}px;
        font-size: ${props => props.textSize}px;
        white-space: nowrap;
    }
`;

export default function IconWithText( { icon, text, pPadding, textSize, className}) {
  return (
    <Root
        textSize={textSize}
        className={className}
        pPadding={pPadding}
    >
        <img src={icon} alt='' />
        <p>{text}</p>
    </Root>
  )
}

IconWithText.defaultProps = {
    textSize: '18',
    pPadding: '8'
}