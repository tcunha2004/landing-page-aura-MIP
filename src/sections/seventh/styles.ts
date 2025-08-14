import styled from "styled-components";
import {
  ParallaxBackground,
  Title,
} from "../../styled-components/ModelComponents";
import { Button } from "../../styled-components/SharebleComponents";

interface BackgroundSeventhSectionProps {
  url: string;
}

export const BackgroundSeventhSection = styled(
  ParallaxBackground
)<BackgroundSeventhSectionProps>`
  background-image: url(${(props) => props.url});
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73); /* preto 50% opaco */
  z-index: 1;
`;

export const TitleSeventhSection = styled(Title)`
  height: 13rem;
  padding-top: 4rem;
  margin: auto;
  position: relative;
  z-index: 2;
`;

export const Iframe = styled.iframe`
  z-index: 2;
  position: relative;
  top: 0rem;
  left: 50%;
  transform: translate(-50%);
`;

export const ButtonParallax = styled(Button)`
  position: relative;
  z-index: 2;
  display: block;
  margin: 3rem auto 0;
`;
