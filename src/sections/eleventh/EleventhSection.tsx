import {
  BackgroundEleventhSection,
  Companies,
  CreditsContainer,
  Overlay,
  TitleEleventhSection,
} from "./styles";
import BackgroundImage from "../../assets/banners/apartamento_0.jpg";
import TitleImage from "../../assets/titles/ficha.png";

function EleventhSection() {
  return (
    <BackgroundEleventhSection url={BackgroundImage}>
      <Overlay />
      <TitleEleventhSection src={TitleImage} />
      <CreditsContainer>
        <Companies>
          <span>Incorporação e Construção:</span>
          <span>MIP CONSTRUTORA</span>
        </Companies>
        <Companies>
          <span>Projeto arquitetônico:</span>
          <span>TORRES MIRANDA ARQUITETURA E CONSULTORIA</span>
        </Companies>
        <Companies>
          <span>Paisagismo:</span>
          <span>MERCADO VERDE</span>
        </Companies>
      </CreditsContainer>
    </BackgroundEleventhSection>
  );
}

export default EleventhSection;
