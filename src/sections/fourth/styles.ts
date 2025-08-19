import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const TitleFourthSection = styled(Title)`
  height: 9rem;
  margin-top: 6rem;

  @media (max-width: 600px) {
    height: 7rem;
    margin-top: 4rem;
  }
`;

export const Background = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.cinza};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 3rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.beige};
  font-size: 1rem;
  font-weight: 600;
  font-family: MontSerrat;
  width: 25%;
  text-align: justify;
  margin-top: 3rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    width: 30%;
    text-align: justify;
  }

  @media (max-width: 680px) {
    font-size: 0.8rem;
    width: 40%;
    text-align: justify;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 60%;
    text-align: justify;
    margin-top: 2rem;
  }
`;
