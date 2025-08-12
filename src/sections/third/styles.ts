import styled from "styled-components";

export const Background = styled.div`
  height: 640px;
  background-color: ${(props) => props.theme.beige};
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.img`
  display: block;
  height: 10rem;
  width: auto;
  margin: 0 auto 2rem auto;
`;

export const Maps = styled.a`
  width: max-content;
  height: max-content;
`;
