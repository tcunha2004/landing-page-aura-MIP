import styled from "styled-components";

export const Background = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.cinza};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.beige};
  font-size: 1rem;
  font-weight: 600;
  font-family: MontSerrat;
  width: 25%;
  text-align: justify;
  margin-top: 3rem;
`;
