import {
  BackgroundSeventhSection,
  ButtonParallax,
  Iframe,
  Overlay,
  TitleSeventhSection,
} from "./styles";
import ParallaxImage from "../../assets/banners/parallax_1.jpg";
import TitleImage from "../../assets/titles/encontre-se.png";

function SeventhSection() {
  return (
    <BackgroundSeventhSection url={ParallaxImage} paddingBottom={4}>
      <Overlay />
      <TitleSeventhSection src={TitleImage} />
      <Iframe
        src="https://www.youtube-nocookie.com/embed/Lh_I55QkBKQ?si=rqWttVdk5Z7nwL74&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></Iframe>
      <ButtonParallax backgroundColor="light-pink" border="no" color="marrom">
        CADASTRE-SE AGORA
      </ButtonParallax>
    </BackgroundSeventhSection>
  );
}

export default SeventhSection;
