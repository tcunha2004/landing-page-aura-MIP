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
  margin-top: 5rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    width: 30%;
  }
  @media (max-width: 680px) {
    font-size: 0.8rem;
    width: 40%;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 60%;
  }
`;

/** Dá largura real ao carrossel e estiliza slick */
export const CarouselWrapper = styled.div`
  width: 80%;
  margin-top: 2rem;

  /* centraliza e dá espaço entre slides */
  .slick-slide {
    padding: 0 0.5rem;
  }

  /* setas e dots no tema */
  .slick-prev:before,
  .slick-next:before {
    color: ${(p) => p.theme.beige};
    font-size: 30px;
  }
  .slick-dots {
    bottom: -45px;
  } /* dots embaixo, não no meio da tela */
  .slick-dots li button:before {
    color: ${(p) => p.theme.beige};
    opacity: 0.5;
  }
  .slick-dots li.slick-active button:before {
    color: ${(p) => p.theme.beige};
    opacity: 1;
  }

  @media (max-width: 480px) {
    width: 78%;
  }
`;

/** Evita colapso de altura do slide antes da imagem carregar */
export const SlideItem = styled.div`
  min-height: 150px; /* ajuste conforme seu layout */
  display: flex;
  align-items: center;
  justify-content: center;
`;
