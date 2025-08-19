import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const AlignContainer = styled.div`
  height: 100%;
  width: 25rem;
  position: relative;
  left: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 20rem;
  }

  @media (max-width: 840px) {
    width: 16rem;
  }
`;

export const TitleSixthSection = styled(Title)`
  height: 9rem;

  @media (max-width: 840px) {
    height: 6rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.marrom};
  font-weight: 500;
  font-size: 0.85rem;
  font-family: MontSerrat;
  line-height: 1.25rem;
`;
