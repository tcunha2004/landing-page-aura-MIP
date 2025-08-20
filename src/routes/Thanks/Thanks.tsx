import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import Banner from "../../assets/banners/banner_thanks.jpg";
import BannerMobile from "../../assets/banners/banner_thanks_mobile.jpg";
import { AlignContainer, TextThanks, TitleThanks } from "./styles";
import TitleImage from "../../assets/titles/parabens.png";

function Thanks() {
  return (
    <ImageBackground url={Banner} urlMobile={BannerMobile} fullBackground="yes">
      <AlignContainer>
        <TitleThanks src={TitleImage} />
        <TextThanks>
          <span>
            Você deu o primeiro passo em direção ao seu novo lifestyle.
          </span>
          <span>
            Enquanto aguarda o contato de um consultor, baixe o book digital do
            AURA by MIP e descubra mais detalhes sobre um empreendimento
            inigualável.
          </span>
        </TextThanks>
        <Button backgroundColor="marrom-avermelhado" border="no" color="beige">
          BAIXE O BOOK
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default Thanks;
