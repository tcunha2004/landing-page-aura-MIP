import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const AlignContainer = styled.div`
  height: 100%;
  width: 25rem;

  position: relative;
  left: 15%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TitleTenthSection = styled(Title)`
  height: 8rem;
`;

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  color: ${(props) => props.theme.beige};
  margin-bottom: 0.5rem;
`;
