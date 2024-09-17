import HeroSection from "../components/HeroSection";
import Dishes from "../components/Dishes";
import About from "../components/About";
import Mission from "../components/Mission";
import Expertise from "../components/Expertise";
import Review from "../components/Review";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactSection />
    </>
  );
};

export default Home;
