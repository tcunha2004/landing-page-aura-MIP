import {
  Background,
  Text,
  TitleFourthSection,
  CarouselWrapper,
  SlideItem,
} from "./styles";
import TitleImg from "../../assets/titles/area_de_lazer.png";
import AuraPiscina from "../../assets/banners/aura_lazer_piscina.jpg";
import AuraAcademia from "../../assets/banners/aura_lazer_acad.jpg";
import AuraGourmet from "../../assets/banners/aura_lazer_espaco_gourmet.jpg";
import AuraSalao from "../../assets/banners/aura_lazer_bar.jpg";
import AuraBrinquedoteca from "../../assets/banners/aura_lazer_brinquedoteca.jpg";
import AuraMassagem from "../../assets/banners/aura_lazer_massagem.jpg";
import AuraPet from "../../assets/banners/aura_lazer_pet_place.jpg";
import AuraCoWorking from "../../assets/banners/aura_lazer_coworking.jpg";
import AuraSauna from "../../assets/banners/aura_lazer_sauna.jpg";
import AuraPlayGround from "../../assets/banners/aura_lazer_playground.jpg";
import { AuraImage, Button } from "../../styled-components/SharebleComponents";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface AcceptScrollFunction {
  func: () => void
}

function FourthSection(props: AcceptScrollFunction) {
  const images = [
    AuraPiscina,
    AuraAcademia,
    AuraGourmet,
    AuraSalao,
    AuraBrinquedoteca,
    AuraMassagem,
    AuraPet,
    AuraCoWorking,
    AuraSauna,
    AuraPlayGround,
  ];

  const settings: import("react-slick").Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true, // ajuda a manter altura do slider conforme conteúdo
  };

  return (
    <Background>
      <TitleFourthSection src={TitleImg} />

      <CarouselWrapper>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <SlideItem key={idx}>
              <AuraImage
                src={img}
                alt={`Área de lazer ${idx + 1}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </SlideItem>
          ))}
        </Slider>
      </CarouselWrapper>

      <Text>
        Prepare-se para mergulhar em uma experiência única, com lazer para o
        corpo e descanso para mente e alma.
      </Text>

      <Button onClick={props.func} backgroundColor="transparent" border="yes" color="beige">
        QUERO SABER MAIS
      </Button>
    </Background>
  );
}

export default FourthSection;
