import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const AlignContainer = styled.div`
  height: 100%;
  width: 30rem;
  position: relative;
  left: 10%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80%;
    align-items: center;
  }
`;

export const TitleEightSection = styled(Title)`
  height: 9rem;
  margin-top: 4rem;

  @media (max-width: 600px) {
    height: 6.5rem;
  }
`;

export const UnorderedList = styled.ul`
  font-size: 1.1rem;
  font-family: Montserrat;
  color: ${(props) => props.theme["marrom-avermelhado"]};
  font-weight: 600;
  margin: -0.5rem 0 0.5rem 1rem;

  li {
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
