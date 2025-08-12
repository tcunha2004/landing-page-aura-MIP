import { Background, Maps, Title } from "./styles";
import TitleImg from "../../assets/titles/navegue.png";
import MapsImg from "../../assets/maps.png";

function ThirdSection() {
  return (
    <Background>
      <Title src={TitleImg}></Title>
      <Maps
        href="https://www.google.com/maps/place/R.+Alvarenga+Peixoto,+1400+-+Santo+Agostinho,+Belo+Horizonte+-+MG,+30180-126/@-19.9284059,-43.9534098,17z/data=!3m1!4b1!4m6!3m5!1s0xa69768a1c783d7:0xa67ab8d7436bd4d8!8m2!3d-19.9284059!4d-43.9534098!16s%2Fg%2F11w1q77g0j?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        <img src={MapsImg} alt="Mapa Aura" />
      </Maps>
    </Background>
  );
}

export default ThirdSection;
