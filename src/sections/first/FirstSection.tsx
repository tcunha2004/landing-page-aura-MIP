import {
  FormContainer,
  LabelAndInput,
  MipLogo,
  TitleAndFormContainer,
  TitleFirstSection,
} from "./styles";
import MipLogoImg from "../../assets/mip-logo.png";
import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BackgroundImage from "../../assets/banners/banners_01.jpg";
import TitleImage from "../../assets/titles/tudo_de_melhor.png";

function FirstSection() {
  return (
    <ImageBackground
      url={BackgroundImage}
      imageHeight={640}
      responsivenessCenter="yes"
    >
      <TitleAndFormContainer>
        <MipLogo src={MipLogoImg} />
        <TitleFirstSection src={TitleImage} />
        <FormContainer>
          <div className="text">
            <h1>Conquiste o seu melhor lugar.</h1>
            <h2>Aproveite as condições especiais.</h2>
          </div>

          <LabelAndInput>
            <label htmlFor="nome">Nome*</label>
            <input id="nome" type="text" name="nome" required />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="telefone">Telefone*</label>
            <input id="telefone" type="tel" name="telefone" required />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" name="email" required />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="interesse">Qual interesse no empreendimento?</label>
            <select id="interesse" name="interesse" required>
              <option value="">Selecione</option>
              <option value="morar">Para Morar</option>
              <option value="investir">Para Investir</option>
            </select>
          </LabelAndInput>

          <Button
            type="submit"
            backgroundColor="marrom-avermelhado"
            color="beige"
            border="no"
          >
            QUERO SABER MAIS
          </Button>
        </FormContainer>
      </TitleAndFormContainer>
    </ImageBackground>
  );
}

export default FirstSection;
