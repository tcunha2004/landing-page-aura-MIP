import styled from "styled-components";

export const WhatsAppIcon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;

  z-index: 10;
  position: fixed;
  top: 65vh;
  right: 1.5vw;

  transition: opacity 0.5s;

  &:hover {
    opacity: 70%;
  }

  @media (max-width: 1024px) {
    top: 92vh;
    right: 2vw;
  }
`;
