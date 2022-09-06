import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "initial")};
  justify-content: ${({ justify }) => (justify ? justify : "initial")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  align-content: ${({ alignContent }) => (alignContent ? alignContent : "initial")};
`;

export default function Flex({
  className,
  children,
  direction,
  justify,
  alignItems,
  alignContent
}) {
  return (
    <StyledFlex
      className={className}
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
    >
      {children}
    </StyledFlex>
  );
}