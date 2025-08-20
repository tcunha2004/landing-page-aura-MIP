import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import Banner from "../../assets/banners/banner_thanks.jpg";
import BannerMobile from "../../assets/banners/banner_thanks_mobile.jpg";
import { AlignContainer, TextThanks, TitleThanks } from "./styles";
import TitleImage from "../../assets/titles/parabens.png";

function Thanks() {

  const ebook = "https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F167562%2F1719005896MIP_0009_24_AURA_BOOK_CLIENTE_DIGITAL.pdf"

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
        <Button onClick={() => window.open(ebook, "_blank")} backgroundColor="marrom-avermelhado" border="no" color="beige">
          BAIXE O BOOK
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default Thanks;
