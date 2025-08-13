import {
  Button,
  ImageBackground,
  Title,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/banners_03.jpg";
import TitleImage from "../../assets/titles/viva_em _um.png";
import { Text } from "./styles";

function SixthSection() {
  return (
    <ImageBackground url={BackgroundImage} imageHeight={825}>
      <Title src={TitleImage} />
      <Text>
        Você merece viver em um lugar planejado para que cada momento seja uma
        celebração. O Aura by MIP é o lugar onde sua mente, corpo e alma
        sentem-se em casa.
      </Text>
      <Button backgroundColor="marrom-avermelhado" border="no" color="beige">
        Converse com um Consultor
      </Button>
    </ImageBackground>
  );
}

export default SixthSection;
