import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import Collaboration from "./components/Collaboration";
import { Contact, StarsCanvas } from "./components";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials"
import HeroComp from "./components/HeroComp";
import Slide from "./components/Slide";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Outlet />
        <Hero />
        {/* <Benefits /> */}
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
