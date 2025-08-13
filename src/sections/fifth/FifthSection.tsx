import { AuraImage, Title } from "../../styled-components/SharebleComponents";
import { AreaNumbers, Background, NumbersContainer } from "./styles";
import SateliteImage from "../../assets/satelite_image.jpeg";
import TitleImage from "../../assets/titles/espacos_projetados.png";
import AreaNumber1 from "../../assets/num_01.png";
import AreaNumber2 from "../../assets/num_02.png";
import AreaNumber3 from "../../assets/num_03.png";
import AreaNumber4 from "../../assets/num_04.png";

function FifthSection() {
  return (
    <Background>
      <Title src={TitleImage} />
      <AuraImage src={SateliteImage} />
      <NumbersContainer>
        <AreaNumbers src={AreaNumber1} />
        <AreaNumbers src={AreaNumber2} />
        <AreaNumbers src={AreaNumber3} />
        <AreaNumbers src={AreaNumber4} />
      </NumbersContainer>
    </Background>
  );
}

export default FifthSection;
