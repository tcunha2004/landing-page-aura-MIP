import { Banner, Button, TextContainer, TitleImage } from "./styles";
import Title from "../../assets/titles/o_melhor_de_bh.png";

function SecondSection() {
  return (
    <Banner>
      <TextContainer>
        <TitleImage src={Title} />
        <p>
          O Aura by MIP é o mais novo lançamento da MIP Construtora de alto
          padrão no Santo Agostinho. Localizado Na Rua Alvarenga Peixoto, em um
          ponto nobre do bairro, o empreendimento reúne tudo que você precisa em
          termos de conforto, conveniência e segurança. More próximo às melhores
          escolas, praças, hospitais, shoppings e prédios comerciais com acesso
          facilitado às principais avenidas de Belo Horizonte.
        </p>
        <Button>QUERO MORAR NO SANTO AGOSTINHO</Button>
      </TextContainer>
    </Banner>
  );
}

export default SecondSection;
