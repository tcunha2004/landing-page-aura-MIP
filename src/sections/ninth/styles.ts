import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleNinthSection = styled(Title)`
  margin-top: 3rem;
  height: 9rem;

  @media (max-width: 600px) {
    height: 5rem;
  }
`;

export const Background = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme["marrom-avermelhado"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 3rem;
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  max-width: 60rem;
  margin: 1rem auto 4rem;

  @media (max-width: 1024px) {
    max-width: 80vw;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
`;

export const IconContainer = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    height: 10rem;
    justify-content: center;
  }
`;

export const Icon = styled.img`
  height: 10rem;
  width: 10rem;

  @media (max-width: 900px) {
    height: 7rem;
    width: 7rem;
  }
`;

export const IconText = styled.span`
  color: ${(props) => props.theme.white};
  font-family: MontSerrat;
  font-size: 1rem;
  text-align: center;
`;
