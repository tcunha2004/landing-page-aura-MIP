import styled from "styled-components";

interface ImageBackgroundProps {
  url: string;
  imageHeight?: number;
  paddingBottom?: number;
  position?: "center";
  responsivenessCenter?: "yes";
  responsivenessRight?: "yes";
  responsivenessBook?: "yes";

  urlMobile: string;
  imageHeightMobile?: number;

  fullBackground?: "yes";
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: ${(props) =>
    props.position == "center" ? `${props.position}` : "initial"};
  height: ${(props) => {
    if (props.fullBackground === "yes") return "100vh";
    if (props.imageHeight) return `${props.imageHeight}px`;
    return "auto";
  }};
  background-repeat: no-repeat;
  width: 100vw;
  padding-bottom: ${(props) =>
    props.paddingBottom ? `${props.paddingBottom}rem` : "0"};

  @media (max-width: 1200px) {
    background-position: ${({ responsivenessCenter, responsivenessBook }) =>
      responsivenessCenter === "yes"
        ? "center"
        : responsivenessBook === "yes"
        ? "-22rem"
        : "initial"};
  }

  @media (max-width: 600px) {
    background-image: ${({ urlMobile }) =>
      urlMobile ? `url(${urlMobile})` : "none"};
    background-position: ${(props) =>
      props.responsivenessRight == "yes" ? "right" : "initial"};
    height: ${(props) =>
      props.imageHeightMobile ? `${props.imageHeightMobile}px` : "auto"};
  }
`;

// ---
interface ButtonProps {
  backgroundColor: string | "transparent";
  color: string;
  border: "yes" | "no";
}

export const Button = styled.button<ButtonProps>`
  font-family: Montserrat;
  background-color: ${(props) =>
    props.backgroundColor == "transparent"
      ? "transparent"
      : (props.theme as any)[props.backgroundColor]};
  color: ${(props) => (props.theme as any)[props.color]};

  margin-top: 1rem;
  padding: 1.25rem;
  font-size: 0.9rem;
  border: ${(props) =>
    props.border == "yes" ? `2px solid ${props.theme.beige}` : "none"};

  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 80%;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding: 1rem;
  }
`;

// ---

interface AuraImageProps {
  marginTop?: number;
}

export const AuraImage = styled.img<AuraImageProps>`
  width: 95%;
  max-width: 1000px;
  margin: ${(props) =>
    props.marginTop ? `${props.marginTop}rem auto 0` : "0 auto"};
  display: block;
`;
