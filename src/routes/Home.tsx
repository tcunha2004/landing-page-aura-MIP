import { WhatsAppIcon } from "../App";
import WhatsAppImg from "../assets/wpp.png";
import FirstSection from "../sections/first/FirstSection";
import SecondSection from "../sections/second/SecondSection";
import ThirdSection from "../sections/third/ThirdSection";
import FourthSection from "../sections/fourth/FourthSection";
import FifthSection from "../sections/fifth/FifthSection";
import SixthSection from "../sections/sixth/SixthSection";
import SeventhSection from "../sections/seventh/SeventhSection";
import EightSection from "../sections/eight/EightSection";
import NinthSection from "../sections/ninth/NinthSection";
import TenthSection from "../sections/tenth/TenthSection";
import EleventhSection from "../sections/eleventh/EleventhSection";
import Footer from "../sections/footer/Footer";

function Home() {

  function scrollUp() {
    document.getElementById("scrollUp")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=5531992810084&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <WhatsAppIcon src={WhatsAppImg} />
      </a>

      <FirstSection />
      <SecondSection func={scrollUp} />
      <ThirdSection />
      <FourthSection func={scrollUp} />
      <FifthSection />
      <SixthSection func={scrollUp} />
      <SeventhSection func={scrollUp} />
      <EightSection func={scrollUp} />
      <NinthSection func={scrollUp} />
      <TenthSection />
      <EleventhSection />
      <Footer />
    </>
  );
}

export default Home;
