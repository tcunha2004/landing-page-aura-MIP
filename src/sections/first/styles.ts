import styled from "styled-components";
import { Title } from "../../styled-components/ModelComponents";

export const MipLogo = styled.img`
  height: 2rem;
  position: relative;
  top: -2rem;
  right: -13rem;
`;

export const TitleFirstSection = styled(Title)`
  height: 7rem;
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
    color: ${(props) => props.theme["dark-gray"]};
  }
`;

export const TitleAndFormContainer = styled.div`
  width: fit-content;
  position: relative;
  left: 65vw;
  top: 3rem;

  h1 .first-main-title {
    font-family: Merriweather;
    color: ${(props) => props.theme["marrom-avermelhado"]};
    font-weight: lighter;
    font-size: 2.4rem;
    line-height: 40px;

    display: inline-block;
    transform: scaleY(1.1);
    transform-origin: left center;
  }

  h1 .first-sub-main-title {
    font-family: Birthstone;
    color: ${(props) => props.theme["preto-gourmet"]};
    font-weight: 600;
    font-size: 3.85rem;
    line-height: 40px;

    display: inline-block;
    transform: scaleX(1.4);
    transform-origin: left center;
  }
`;
