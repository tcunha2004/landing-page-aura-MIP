import styled from "styled-components";

export const Background = styled.div`
  height: 640px;
  background-color: ${(props) => props.theme.beige};
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Maps = styled.a`
  width: 100vw;
  height: auto;
`;
