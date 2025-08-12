import styled from "styled-components";

export const Background = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.cinza};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
`;

export const Title = styled.img`
  height: 10rem;
  width: auto;
`;

export const AuraImage = styled.img`
  width: 1060px;
`;
