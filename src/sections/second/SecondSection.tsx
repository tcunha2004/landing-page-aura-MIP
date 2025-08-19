import { TextContainer, TitleSecondSection } from "./styles";
import TitleImage from "../../assets/titles/o_melhor_de_bh.png";
import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/banners_02.jpg";

function SecondSection() {
  return (
    <ImageBackground
      url={BackgroundImage}
      imageHeight={615}
      responsivenessCenter="yes"
      urlMobile={BackgroundImage}
      imageHeightMobile={500}
    >
      <TextContainer>
        <TitleSecondSection src={TitleImage} />
        <p>
          O Aura by MIP é o mais novo lançamento da MIP Construtora de alto
          padrão no Santo Agostinho. Localizado Na Rua Alvarenga Peixoto, em um
          ponto nobre do bairro, o empreendimento reúne tudo que você precisa em
          termos de conforto, conveniência e segurança. More próximo às melhores
          escolas, praças, hospitais, shoppings e prédios comerciais com acesso
          facilitado às principais avenidas de Belo Horizonte.
        </p>
        <Button backgroundColor="transparent" border="yes" color="beige">
          QUERO MORAR NO SANTO AGOSTINHO
        </Button>
      </TextContainer>
    </ImageBackground>
  );
}

export default SecondSection;
