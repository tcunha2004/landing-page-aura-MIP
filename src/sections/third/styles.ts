import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleThirdSection = styled(Title)`
  height: 12rem;
  width: auto;
  margin: 0 auto;
  padding-top: 3rem;

  @media (max-width: 600px) {
    height: 8rem;
    padding-top: 2rem;
  }
`;

export const Background = styled.div`
  height: auto;
  background-color: ${(props) => props.theme.beige};

  display: block;
`;
