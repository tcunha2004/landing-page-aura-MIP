import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/banners_04.jpg";
import { AlignContainer, TitleEightSection, UnorderedList } from "./styles";
import TitleImage from "../../assets/titles/sustentabilidade.png";

interface AcceptScrollFunction {
  func: () => void
}

function EightSection(props: AcceptScrollFunction) {
  return (
    <ImageBackground
      url={BackgroundImage}
      paddingBottom={4}
      urlMobile={BackgroundImage}
    >
      <AlignContainer>
        <TitleEightSection src={TitleImage} />
        <UnorderedList>
          <li>Estação de recarga de carro elétrico</li>
          <li>Medição individualizada de água</li>
          <li>Lâmpadas de LED nas áreas comuns</li>
          <li>Medição individualizada de gás canalizado</li>
          <li>Sistema de reaproveitamento de água da chuva</li>
        </UnorderedList>
        <Button onClick={props.func} backgroundColor="marrom-avermelhado" border="no" color="beige">
          VIVA UMA VIDA SAUDÁVEL
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default EightSection;
