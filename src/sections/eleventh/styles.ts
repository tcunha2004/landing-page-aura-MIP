import styled from "styled-components";
import {
  ParallaxBackground,
  Title,
} from "../../styled-components/ModelComponents";

interface BackgroundEleventhSectionProps {
  url: string;
}

export const BackgroundEleventhSection = styled(
  ParallaxBackground
)<BackgroundEleventhSectionProps>`
  background-image: url(${(props) => props.url});
  height: 310px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 750px) {
    height: ${(props) =>
      props.imageHeightMobile ? `${props.imageHeightMobile}px` : "auto"};
    flex-direction: column;
    gap: 1rem;
    padding: 10%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(140, 75, 75, 0.7);

  z-index: 1;
`;

export const TitleEleventhSection = styled(Title)`
  position: relative;
  z-index: 2;
  height: 10rem;
`;

export const CreditsContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;

  @media (max-width: 750px) {
    text-align: center;
    align-items: center;
  }
`;

export const Companies = styled.div`
  span:first-child {
    font-weight: 600;
  }

  font-family: Montserrat;
  color: ${(props) => props.theme["light-pink"]};
  font-weight: 400;

  display: flex;
  flex-direction: column;
`;
