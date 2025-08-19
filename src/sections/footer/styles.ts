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

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const AuraByMip = styled.img`
  height: 7rem;

  @media (max-width: 750px) {
    height: 5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme["azul-escuro"]};
  text-align: center;

  span:first-child {
    font-size: 1.2rem;
    font-weight: 600;
    @media (max-width: 750px) {
      font-size: 1rem;
    }
  }

  span:nth-child(2) {
    font-size: 2rem;
    font-weight: 600;
    @media (max-width: 750px) {
      font-size: 1.2rem;
    }
  }

  span:nth-child(3) {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 600;
  }

  span:nth-child(4) {
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 400;
    width: 80%;
    margin: auto;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
