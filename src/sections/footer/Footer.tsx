import {
  AuraByMip,
  BackgroundFooter,
  Icon,
  IconsContainer,
  Info,
  MainContent,
  SmallLetters,
} from "./styles";
import LogoImage from "../../assets/AuraByMip.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Youtube from "../../assets/icons/youtube.png";

function Footer() {
  return (
    <BackgroundFooter>
      <MainContent>
        <AuraByMip src={LogoImage} />
        <Info>
          <span>Informações e vendas:</span>
          <span>(31) 99281-0084</span>
          <span>Estande de vendas:</span>
          <span>Rua Alvarenga Peixoto, 1400 Santo Agostinho</span>
          <IconsContainer>
            <Icon
              href="https://www.facebook.com/mipconstrutora/"
              target="_blank"
            >
              <img src={Facebook} alt="Facebook" />
            </Icon>
            <Icon
              href="https://www.instagram.com/mipconstrutora/"
              target="_blank"
            >
              <img src={Instagram} alt="Instagram" />
            </Icon>
            <Icon
              href="https://www.youtube.com/@mipconstrutora3784"
              target="_blank"
            >
              <img src={Youtube} alt="Youtube" />
            </Icon>
          </IconsContainer>
        </Info>
      </MainContent>
      <SmallLetters>
        Material preliminar preparado exclusivamente para treinamento interno e
        sujeito à alteração. As imagens e plantas contidas neste manual possuem
        caráter meramente ilustrativo. O mobiliário e os equipamentos constantes
        nestas imagens e plantas não fazem parte do Contrato de Compra e Venda,
        uma vez que nesse prevalece apenas os itens que estão especificados no
        Memorial Descritivo. Em virtude de conveniência técnica, as dimensões,
        esquadrias e layouts poderão ser ajustados a critério da MIP
        Construtora. Proibido a distribuição desse material. Memorial de
        Incorporação registrado junto ao Cartório do 1º Ofício RIBH sob o nº
        R-2, da matrícula 169.520.
      </SmallLetters>
    </BackgroundFooter>
  );
}

export default Footer;
