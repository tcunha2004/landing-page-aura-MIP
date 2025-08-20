import { Background, TitleThirdSection } from "./styles";
import TitleImg from "../../assets/titles/navegue.png";

function ThirdSection() {
  return (
    <Background>
      <TitleThirdSection src={TitleImg} />

      <iframe
        width="100%"
        height="450"
        style={{
          display: "block",
          margin: "2rem auto 0rem",
          border: 0,
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUdo9StAGoyXsdh7wdYYgy1uLMAnRZA4Y
          &q=Aura+By+Mip"
      ></iframe>
    </Background>
  );
}

export default ThirdSection;
