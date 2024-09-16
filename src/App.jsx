import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Resources from "./pages/Resources";

import Dishes from "./components/Dishes";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Review from "./components/Review";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavbarSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <ContactSection />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/resouces" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
