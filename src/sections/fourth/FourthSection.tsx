import { Background, Text, TitleFourthSection } from "./styles";
import TitleImg from "../../assets/titles/area_de_lazer.png";
import AuraPiscina from "../../assets/banners/aura_lazer_piscina.jpg";
import AuraAcademia from "../../assets/banners/aura_lazer_acad.jpg";
import AuraGourmet from "../../assets/banners/aura_lazer_espaco_gourmet.jpg";
import AuraSalao from "../../assets/banners/aura_lazer_bar.jpg";
import AuraBrinquedoteca from "../../assets/banners/aura_lazer_brinquedoteca.jpg";
import AuraMassagem from "../../assets/banners/aura_lazer_massagem.jpg";
import AuraPet from "../../assets/banners/aura_lazer_pet_place.jpg";
import AuraCoWorking from "../../assets/banners/aura_lazer_coworking.jpg";
import AuraSauna from "../../assets/banners/aura_lazer_sauna.jpg";
import AuraPlayGround from "../../assets/banners/aura_lazer_playground.jpg";
import { AuraImage, Button } from "../../styled-components/SharebleComponents";

function FourthSection() {
  return (
    <Background>
      <TitleFourthSection src={TitleImg} />
      <AuraImage src={AuraPiscina} marginTop={1} />
      <AuraImage src={AuraAcademia} />
      <AuraImage src={AuraGourmet} />
      <AuraImage src={AuraSalao} />
      <AuraImage src={AuraBrinquedoteca} />
      <AuraImage src={AuraMassagem} />
      <AuraImage src={AuraPet} />
      <AuraImage src={AuraCoWorking} />
      <AuraImage src={AuraSauna} />
      <AuraImage src={AuraPlayGround} />
      <Text>
        Prepare-se para mergulhar em uma experiência única, com lazer para o
        corpo e descanso para mente e alma.
      </Text>
      <Button backgroundColor="transparent" border="yes" color="beige">
        QUERO SABER MAIS
      </Button>
    </Background>
  );
}

export default FourthSection;
