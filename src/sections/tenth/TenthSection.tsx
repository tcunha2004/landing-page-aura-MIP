import {
  Button,
  ImageBackground,
} from "../../styled-components/SharebleComponents";
import BannerBook from "../../assets/banners/banner_book.jpg";
import { AlignContainer, Text, TitleTenthSection } from "./styles";
import TitleImage from "../../assets/titles/leve_o_book.png";

function TenthSection() {
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
        <Button backgroundColor="transparent" border="yes" color="beige">
          FAÇA O DOWNLOAD
        </Button>
      </AlignContainer>
    </ImageBackground>
  );
}

export default TenthSection;
