import {
  Banner,
  FormButton,
  FormContainer,
  LabelAndInput,
  MipLogo,
  TitleAndFormContainer,
} from "./styles";
import MipLogoImg from "../../assets/mip-logo.png";

function FirstSection() {
  return (
    <Banner>
      <TitleAndFormContainer>
        <section className="empty"></section>
        <section className="content">
          <MipLogo src={MipLogoImg} />
          {/* Title */}
          <h1>
            <span className="first-main-title">Tudo de melhor</span>
            <br />
            <span className="first-sub-main-title">ao seu redor</span>
          </h1>
          {/* Form */}
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
              <label htmlFor="interesse">
                Qual interesse no empreendimento?
              </label>
              <select id="interesse" name="interesse" required>
                <option value="">Selecione</option>
                <option value="morar">Para Morar</option>
                <option value="investir">Para Investir</option>
              </select>
            </LabelAndInput>

            <FormButton type="submit">QUERO SABER MAIS</FormButton>
          </FormContainer>
        </section>
      </TitleAndFormContainer>
    </Banner>
  );
}

export default FirstSection;
