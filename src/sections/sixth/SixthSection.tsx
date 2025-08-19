import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/banners_03.jpg";
import TitleImage from "../../assets/titles/viva_em _um.png";
import { AlignContainer, Text, TitleSixthSection } from "./styles";

function SixthSection() {
  return (
    <ImageBackground
      url={BackgroundImage}
      imageHeight={800}
      responsivenessCenter="yes"
    >
      <AlignContainer>
        <TitleSixthSection src={TitleImage} />
        <Text>
          Você merece viver em um lugar planejado para que cada momento seja uma
          celebração. O Aura by MIP é o lugar onde sua mente, corpo e alma
          sentem-se em casa.
        </Text>
        <Button backgroundColor="marrom-avermelhado" border="no" color="beige">
          CONVERSE COM UM CONSULTOR
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default SixthSection;
