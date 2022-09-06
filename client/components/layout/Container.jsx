import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../styles/Sizes';

const ComponentWrapper = styled.div`
  
  position: relative;
  height: 100%;
 
  @media (min-width: ${Breakpoints.samsungGalaxyS8}) {
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Container({ children, className }) {
  return (
    <ComponentWrapper className={className}>{children}</ComponentWrapper>
  )
}
