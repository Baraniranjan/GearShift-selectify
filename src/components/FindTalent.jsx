import {Header, Footer, Section, Filters1} from './index'
import {useState} from 'react'
import Button from "./Button";
import { Link } from "react-router-dom";
import Generating from "./Generating";
import { useRef } from "react";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { curve, heroBackground, robot, owl } from "../assets";
import Benefits from './Benefits';
 
 
function FindTalent() {
    const parallaxRef = useRef(null);
 
    const [query, setQuery] = useState("");
    const [filteredProfiles, setFilteredProfiles] = useState([]);
 
    const userProfiles = [
        { id: 1, name: "Alice Johnson", skills: "React, JavaScript, CSS" },
        { id: 2, name: "Bob Smith", skills: "Python, Django, Data Analysis" },
        { id: 3, name: "Charlie Brown", skills: "Java, Spring Boot, Microservices" },
        { id: 4, name: "Diana Prince", skills: "UI/UX Design, Figma, Adobe XD" },
      ];
 
  return (
    <div className = "flex flex-col min-h-screen">
      <Header />
      <Section
        id="submit-section"
        //className="bg-gray-50 text-center"
        crosses={true}
      >
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'
        //className="max-w-2xl mx-auto mb-12 p-4 bg-white rounded-lg shadow-md"
        >
          <h2 className='h3 mb-3'
          //className="text-2xl font-bold text-gray-800 mb-4"
          >Submit Your Question</h2>
          <p className='body-3 max-w-3xl mx-auto mb-3 text-n-2 lg:mb-7'
          //className="text-gray-600 mb-6"
          >
            Anything that you want to ask, please type in here and sbumit
          </p>
          {/* <form > */}
          <input
            type="text"
            placeholder="Ask anything"
            className="w-3/4 p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6 bg-white"
            onChange
            
          />
          {/* <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            ASK!
          </button> */}
          <div className="relative z-1 max-w-[62rem] mx-auto text-center">
            <Link to="/home">
              <Button white>
                ASK!
              </Button>
            </Link>
          </div>
 
          {/* </form> */}
         
        </div>

        <Filters1 />
              
      </Section>

      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Explore the Possibilities
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-14">
            Anything that you want to ask, please type in here and sbumit
            </p>
            {/* <Button href="/pricing" white>
              Get started
            </Button> */}

            <Generating className="relative left-4 right-4 bottom-5 mt-2 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2
            flex items-center justify-center h-11 transition-colors text-white" />

          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">

            <Benefits />

            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={robot}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                  {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="Code generation"
                    />
                  </ScrollParallax> */}
                </div>
              </div>

              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>

            {/* <BackgroundCircles /> */}
          </div>

          <h5 className="hidden relative z-10 mt-20 lg:block tagline mb-6 text-center text-n-1/50">
            Helping people create better tomorrow.
          </h5>
        </div>

        {/* <BottomLine /> */}
      </Section>
       <Footer/>
 
        </div>
      
    )
 
}
 
export default FindTalent