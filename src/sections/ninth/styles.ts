import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleNinthSection = styled(Title)`
  margin-top: 4rem;
  height: 9rem;
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
`;

export const IconContainer = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.img`
  height: 10rem;
  width: 10rem;
`;

export const IconText = styled.span`
  color: ${(props) => props.theme.white};
  font-family: MontSerrat;
  font-size: 1rem;
  text-align: center;
`;
