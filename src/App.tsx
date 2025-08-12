import { ThemeProvider } from "styled-components";
import { WhatsAppIcon } from "./App";
import WhatsAppImg from "./assets/wpp.png";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import FirstSection from "./sections/first/FirstSection";
import SecondSection from "./sections/second/SecondSection";
import ThirdSection from "./sections/third/ThirdSection";
import FourthSection from "./sections/fourth/FourthSection";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <WhatsAppIcon src={WhatsAppImg} />

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </ThemeProvider>
  );
}

export default App;
