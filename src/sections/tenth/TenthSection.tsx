import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BannerBook from "../../assets/banners/banner_book.jpg";
import { AlignContainer, Text, TitleTenthSection } from "./styles";
import TitleImage from "../../assets/titles/leve_o_book.png";


function TenthSection() {

  const ebook = "https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F167562%2F1719005896MIP_0009_24_AURA_BOOK_CLIENTE_DIGITAL.pdf"

  return (
    <ImageBackground
      url={BannerBook}
      imageHeight={560}
      position="center"
      responsivenessBook="yes"
      urlMobile={BannerBook}
      imageHeightMobile={500}
    >
      <AlignContainer>
        <TitleTenthSection src={TitleImage} />
        <Text>
          Faça o download da apresentação digital do empreendimento e
          aprofunde-se em todos os diferenciais do AURA by MIP.
        </Text>
        <Button onClick={() => window.open(ebook, "_blank")} backgroundColor="transparent" border="yes" color="beige">
          FAÇA O DOWNLOAD
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default TenthSection;
