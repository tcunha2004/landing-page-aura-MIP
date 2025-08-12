import styled from "styled-components";
import Banner2 from "../../assets/banners/banners_02.jpg";

export const Banner = styled.div`
  height: 615px;
  width: 100%;
  background-image: url(${Banner2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 400px;

  position: relative;
  left: 22%;

  p {
    width: 90%;
    color: ${(props) => props.theme.beige};
    font-family: Montserrat;
    font-size: 0.85rem;
    margin-top: -1.5rem;
  }
`;

export const TitleImage = styled.img`
  height: 12rem;
  width: fit-content;
`;

export const Button = styled.button`
  padding: 1.25rem;
  margin-top: 1.5rem;
  border: 2px solid ${(props) => props.theme.beige};
  font-family: Montserrat;
  font-size: 1rem;

  background: transparent;
  color: ${(props) => props.theme.beige};

  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background-color: ${(props) => props.theme["cinza-claro"]};
  }
`;
