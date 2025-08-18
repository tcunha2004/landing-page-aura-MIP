import { ThemeProvider } from "styled-components";
import { WhatsAppIcon } from "./App";
import WhatsAppImg from "./assets/wpp.png";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import FirstSection from "./sections/first/FirstSection";
import SecondSection from "./sections/second/SecondSection";
import ThirdSection from "./sections/third/ThirdSection";
import FourthSection from "./sections/fourth/FourthSection";
import FifthSection from "./sections/fifth/FifthSection";
import SixthSection from "./sections/sixth/SixthSection";
import SeventhSection from "./sections/seventh/SeventhSection";
import EightSection from "./sections/eight/EightSection";
import NinthSection from "./sections/ninth/NinthSection";
import TenthSection from "./sections/tenth/TenthSection";
import EleventhSection from "./sections/eleventh/EleventhSection";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <a
        href="https://api.whatsapp.com/send/?phone=5531992810084&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <WhatsAppIcon src={WhatsAppImg} />
      </a>

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <NinthSection />
      <TenthSection />
      <EleventhSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
