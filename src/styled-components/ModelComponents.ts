import styled from "styled-components";

export const Title = styled.img`
  display: block;
  width: auto;
`;

interface ParallaxBackgroundProps {
  paddingBottom?: number;
  imageHeightMobile?: number;
}

export const ParallaxBackground = styled.div<ParallaxBackgroundProps>`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  padding-bottom: ${(props) =>
    props.paddingBottom ? `${props.paddingBottom}rem` : "0"};
`;
