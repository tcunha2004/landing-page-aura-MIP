import styled from "styled-components";

interface ImageBackgroundProps {
  imageHeight?: number;
  url: string;
  paddingBottom?: number;
  positon?: "center";
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  height: ${(props) => (props.imageHeight ? `${props.imageHeight}px` : "auto")};

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) =>
    props.positon == "center" ? `${props.positon}` : "initial"};

  width: 100%;

  padding-bottom: ${(props) =>
    props.paddingBottom ? `${props.paddingBottom}rem` : "0"};
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
