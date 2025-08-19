import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const MipLogo = styled.img`
  height: 2rem;
  position: relative;
  top: -2rem;
  right: -13rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const TitleFirstSection = styled(Title)`
  height: 7rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const FormContainer = styled.form`
  border: solid 1.8px ${(props) => props.theme["marrom-avermelhado"]};
  margin-top: -1rem;
  padding: 1rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1rem;
      font-family: Montserrat;
      font-weight: 700;
      color: ${(props) => props.theme.marrom};
    }

    h2 {
      font-size: 0.8rem;
      font-family: Montserrat;
      font-weight: 500;
      color: ${(props) => props.theme["preto-gourmet"]};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

export const LabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: Montserrat;

  label {
    color: ${(props) => props.theme["marrom-avermelhado"]};
    font-size: 0.75rem;
  }

  input,
  select {
    border: none;
    border-radius: 4px;
    padding: 0.4rem;
    color: ${(props) => props.theme["preto-gourmet"]};
  }
`;

export const TitleAndFormContainer = styled.div`
  width: fit-content;
  position: relative;
  left: 69vw;
  top: 2.5rem;

  @media (max-width: 1024px) {
    left: 60vw;
  }

  @media (max-width: 600px) {
    left: 50%;
    transform: translateX(-50%);
    top: 18rem;
    width: 80vw;
  }
`;
