import React from 'react';
import Header from './Header';
import { heroBackground } from '../assets';
import Section from './Section';
import Button from './Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Testimonials from './testimonials/Testimonials';
import { ComputersCanvas } from './canvas';
import HeroComp from './HeroComp';
import Slide from './Slide';

const cardData = [
    {
        title: "Know the Artist",
        description: " ",
        icon: (
            <svg class="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7.53316 11.8623.00957-.0029m5.58157 7.1424c-.5.515-.9195.8473-1.0611.8903-.4784.1454-5.42881-1.2797-6.23759-3.3305-.80878-2.0507-1.83058-5.8152-1.88967-6.2192-.0591-.40404 1.5599-1.72424 3.59722-2.61073m1.98839 8.05513c-.22637.262-.38955.5599-.55552.8474M13.4999 12c.5.5 1 1.049 2 1.049s1.5-.549 2-1.049m-4-4h.01m3.99 0h.01m-7.01-2.5c0-.28929 2.5-1.5 5-1.5s5 1.13645 5 1.5V12c0 1.9655-4.291 5-5 5-.7432 0-5-3.0345-5-5V5.5Z"/>
          </svg>
         
        ),
        label: "Learn More",
        functionality: "search",
        path:"http://localhost:5173/tools/learn-more"
    },
    {
        title: "Summarizer 1.0",
        description: " ",
        icon: (
            <svg class="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/>
          </svg>
         
        ),
        label: "Summarize",
        path:"http://localhost:5173/tools/summarize"
    },
    {
        title: "Role Radar",
        description: " ",
        icon: (
            <svg class="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd"/>
          </svg>
         
        ),
        label: "Find the role",
        path:"http://localhost:5173/tools/identify-roles"
    },
    {
   
            title: "Script Scout",
            description: " ",
            icon: (
                <svg class="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h8m-8 4h12M6 14h8m-8 4h12"/>
              </svg>
             
            ),
            label: "Get Profiles",
            path: "http://localhost:5173/tools/screen-profiles"
        },
       
];
 
function Tools() {
    return (
        <>
        <div className="flex flex-col max-h-screen">
            <Header />
        </div>
        <HeroComp />
        {/* <Section>
        <div className="h-screen w-screen">
            <div
                className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
                style={{
                    background: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    zIndex: -1,
                }}
            ></div>
            <div className="flex flex-col max-h-screen">
                <Header />

                <div className="w-screen mx-auto p-6 lg:px-30 sm:px-8">
                    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-14 my-44">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="group w-64 h-96 bg-black shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-purple-400 dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                                    <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                                        {card.icon}
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                                    <h2 className="text-xl capitalize font-bold text-white  my-4 my-8">{card.title}</h2>
                                    <p className="text-center text-base dark:text-white">{card.description}</p>
                                    <Link to={card.path}> 
                                    <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300 mt-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                                        </svg>
                                        <span className="ml-2">{card.label}</span>
                                    </button></Link>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </Section> */}
        <Section>
            <Slide />
        </Section>
        <Section>
            <Testimonials />
        </Section>
        </>
    );
}

export default Tools;
