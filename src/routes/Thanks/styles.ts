import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleThanks = styled(Title)`
  height: 5rem;
`;

export const AlignContainer = styled.div`
  display: block;
  position: relative;
  top: 10%;
  left: 15%;
  height: 90vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const TextThanks = styled.div`
  font-family: MontSerrat;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span:first-child {
    font-size: 1rem;
    color: ${(props) => props.theme["marrom"]};
    font-weight: 700;
  }

  font-size: 0.85rem;
  color: ${(props) => props.theme["marrom"]};
  font-weight: 500;
`;
