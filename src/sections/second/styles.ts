import styled from "styled-components";

export const TextContainer = styled.div`
  width: 400px;

  position: relative;
  left: 22%;

  p {
    width: 90%;
    color: ${(props) => props.theme.beige};
    font-family: Montserrat;
    font-size: 0.85rem;
    margin-top: -1.5rem;
  }
`;
