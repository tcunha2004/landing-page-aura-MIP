import styled from "styled-components";

export const BackgroundFooter = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme["light-pink"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding-top: 4rem;
  padding-bottom: 2rem;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
`;

export const AuraByMip = styled.img`
  height: 7rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["azul-escuro"]};

  span:first-child {
    font-size: 1.2rem;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 2rem;
    font-weight: 600;
  }

  span:nth-child(3) {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Icon = styled.a`
  cursor: pointer;

  img {
    height: 1.8rem;
  }
`;

export const SmallLetters = styled.p`
  font-size: 0.6rem;
  color: ${(props) => props.theme["preto-gourmet"]};
  font-family: Montserrat;
  font-weight: 400;
  text-align: center;
  width: 70%;
`;
