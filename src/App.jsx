import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// import Dishes from "./components/Dishes";
// import About from "./components/About";
// import Mission from "./components/Mission";
// import Expertise from "./components/Expertise";
// import Review from "./components/Review";
// import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import About_Us from "./pages/About_Us";
import Home from "./pages/Home";

import Mission_page from "./pages/Mission_page";
import Contribute from "./pages/Contribute";
import Activities from "./pages/Activities";
import Contact_Us from "./pages/Contact_Us";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <NavbarSection />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_Us />} />
          <Route path="/mission" element={<Mission_page />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact_us" element={<Contact_Us />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
