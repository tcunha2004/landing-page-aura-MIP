import styled from "styled-components";
import BackgroundImage from "../../assets/banners/background_piscina.jpg";

export const Background = styled.div`
  height: fit-content;
  width: 100%;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 3rem;
`;

export const AreaNumbers = styled.img``;
