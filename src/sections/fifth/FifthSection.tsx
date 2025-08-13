import {
  AuraImage,
  ImageBackground,
  Title,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/background_piscina.jpg";
import { AreaNumbers, NumbersContainer } from "./styles";
import SateliteImage from "../../assets/satelite_image.jpeg";
import TitleImage from "../../assets/titles/espacos_projetados.png";
import AreaNumber1 from "../../assets/num_01.png";
import AreaNumber2 from "../../assets/num_02.png";
import AreaNumber3 from "../../assets/num_03.png";
import AreaNumber4 from "../../assets/num_04.png";

function FifthSection() {
  return (
    <ImageBackground url={BackgroundImage}>
      <Title src={TitleImage} />
      <AuraImage src={SateliteImage} />
      <NumbersContainer>
        <AreaNumbers src={AreaNumber1} />
        <AreaNumbers src={AreaNumber2} />
        <AreaNumbers src={AreaNumber3} />
        <AreaNumbers src={AreaNumber4} />
      </NumbersContainer>
    </ImageBackground>
  );
}

export default FifthSection;
