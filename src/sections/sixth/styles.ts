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
`;

export const TitleSixthSection = styled(Title)`
  height: 9rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.marrom};
  font-weight: 500;
  font-size: 0.85rem;
  font-family: MontSerrat;
  line-height: 1.25rem;
`;
