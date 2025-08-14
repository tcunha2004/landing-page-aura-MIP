import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleSecondSection = styled(Title)`
  height: 12rem;
`;

export const TextContainer = styled.div`
  width: 400px;

  position: relative;
  left: 20%;
  top: 7rem;

  p {
    width: 90%;
    color: ${(props) => props.theme.beige};
    font-family: Montserrat;
    font-size: 0.85rem;
    margin-top: -1rem;
  }
`;
