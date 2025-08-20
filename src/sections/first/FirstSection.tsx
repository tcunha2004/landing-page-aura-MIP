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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  // valores iniciais do form
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tags: "", // interesse

    permitir_alteracao: true,
    email_gestor: "thiago.cunha@mip.com.br",
    idempreendimento: 24,
    converter: true,
    idsituacao: 1,
  });

  // pega UTMs
  function getUTMs() {
    const urlParams = new URLSearchParams(window.location.search);
    let origem = urlParams.get("utm_source");
    let midia = urlParams.get("utm_medium");
    let campanha = urlParams.get("utm_campaign");

    // Fallback: tráfego orgânico via Google
    const ref = document.referrer;
    const veioDoGoogle = ref.includes("google.");

    if (!origem && veioDoGoogle) {
      origem = "GO";
      midia = "busca-organica";
      campanha = "AURA-busca-organica";
    }

    console.log("UTMs detectadas:", {
      origem,
      midia,
      campanha,
    });

    setFormData((prev) => ({
      ...prev,
      ["origem"]: origem,
      ["midia"]: midia,
      ["campanha"]: campanha,
    }));
  }

  // ao carregar a pagina pega as UTMs
  useEffect(() => {
    getUTMs();
  }, []);

  // ao digitar nos inputs
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const actualValue = e.target.value;
    const actualName = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [actualName]:
        actualName === "tags" ? ["Interesse:" + actualValue] : actualValue, // se for "tags" guarda num array
    }));
  }

  async function sendToCV() {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(
      "https://cvcrm-proxy.vercel.app/api/lead",
      options
    );
    const data = await response.json();
    return data;
  }

  const navigate = useNavigate();

  // ao dar o submit
  async function submitDataToCRM(e: any) {
    e.preventDefault();

    try {
      const result = await sendToCV(); // espera a resposta da API
      console.log(result);

      navigate("/thanks"); // só executa depois do fetch responder
    } catch (err) {
      console.error("Erro ao enviar:", err);
    }
  }

  return (
    <ImageBackground
      url={BackgroundImage}
      urlMobile={BackgroundImageMobile}
      imageHeight={640}
      responsivenessCenter="yes"
      imageHeightMobile={640}
    >
      <TitleAndFormContainer id="scrollUp">
        <MipLogo src={MipLogoImg} />
        <TitleFirstSection src={TitleImage} />
        <FormContainer onSubmit={submitDataToCRM}>
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
              placeholder="Nome Completo"
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
              pattern="^\(?\d{2}\)?[\s]?\d{4,5}[\s]?\d{4}$"
              placeholder="DDD + telefone"
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
              placeholder="E-mail"
              onChange={handleChange}
              required
            />
          </LabelAndInput>

          <LabelAndInput>
            <label htmlFor="interesse">Qual interesse no empreendimento?</label>
            <select id="interesse" name="tags" onChange={handleChange} required>
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
