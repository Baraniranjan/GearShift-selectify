import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import Collaboration from "./components/Collaboration";
import { Contact, StarsCanvas } from "./components";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Outlet />
        <Hero />
        {/* <Benefits /> */}
        <Collaboration />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
