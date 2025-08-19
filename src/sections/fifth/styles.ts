import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleFifthSection = styled(Title)`
  height: 12rem;
  padding-top: 3rem;
  margin: auto;

  @media (max-width: 600px) {
    height: 10rem;
  }
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 3rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const AreaNumbers = styled.img`
  @media (max-width: 1024px) {
    width: 12rem;
  }

  @media (max-width: 840px) {
    width: 9.5rem;
  }

  @media (max-width: 700px) {
    width: 12rem;
  }
`;
