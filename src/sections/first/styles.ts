import styled from "styled-components";
import ImgTest from "../../assets/banners/test.jpeg";

export const Banner = styled.div`
  height: 650px;
  width: 100%;
  background-image: url(${ImgTest});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.form`
  border: solid 1.8px ${(props) => props.theme["marrom-avermelhado"]};
  margin-top: 1rem;
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

export const TitleAndFormContainer = styled.div`
  padding: 4rem 25vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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

export const FormButton = styled.button`
  font-family: Montserrat;
  background-color: ${(props) => props.theme["marrom-avermelhado"]};
  color: ${(props) => props.theme.white};

  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  border: none;

  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background-color: ${(props) => props.theme["marrom-hover"]};
  }
`;
