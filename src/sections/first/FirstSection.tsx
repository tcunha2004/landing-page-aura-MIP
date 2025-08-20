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
import BackgroundImageMobile from "../../assets/banners/first_banner_mobile.jpg";
import { useState } from "react";

function FirstSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    interesse: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    let actualValue = e.target.value;
    let actualName = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [actualName]: actualValue,
    }));
  }

  function dataToCRM(e: any) {
    e.preventDefault();

    // ENVIAR PRO CRM
    console.log(formData);
  }

  return (
    <ImageBackground
      url={BackgroundImage}
      urlMobile={BackgroundImageMobile}
      imageHeight={640}
      responsivenessCenter="yes"
      imageHeightMobile={640}
    >
      <TitleAndFormContainer>
        <MipLogo src={MipLogoImg} />
        <TitleFirstSection src={TitleImage} />
        <FormContainer onSubmit={dataToCRM}>
          <div className="text">
            <h1>Conquiste o seu melhor lugar.</h1>
            <h2>Aproveite as condições especiais.</h2>
          </div>

          <LabelAndInput>
            <label htmlFor="nome">Nome*</label>
            <input
              id="nome"
              type="text"
              name="nome"
              onChange={handleChange}
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="telefone">Telefone*</label>
            <input
              id="telefone"
              type="tel"
              name="telefone"
              onChange={handleChange}
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="email">Email*</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="interesse">Qual interesse no empreendimento?</label>
            <select
              id="interesse"
              name="interesse"
              onChange={handleChange}
              required
            >
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
