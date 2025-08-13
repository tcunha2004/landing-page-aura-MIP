import styled from "styled-components";

interface ImageBackgroundProps {
  imageHeight?: number;
  url: string;
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
  height: ${(props) =>
    props.imageHeight ? `${props.imageHeight}px` : "fit-content"};
  width: 100%;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
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
  padding: 1rem;
  font-size: 1rem;
  border: ${(props) =>
    props.border == "yes" ? `2px solid ${props.theme.beige}` : "none"};

  cursor: pointer;
  transition: opacity 0.5s;
  &:hover {
    opacity: 80%;
  }
`;

// ---

interface TitleProps {
  height?: number;
}

export const Title = styled.img<TitleProps>`
  display: block;
  height: ${(props) => (props.height ? `${props.height}rem` : "9rem")};
  width: auto;
  margin: 0 auto 2rem auto;
`;

export const AuraImage = styled.img`
  width: 1060px;
`;
