import React from "react";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import { heroBackground } from "../assets";
import Benefits from './Benefits';

function FindTalent() {
  return (
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
      </div>
      <Section>
        <Benefits/>
      </Section>
      <Section className="max-w-7xl mx-auto px-4 lg:px-10 py-12">
        <div className="mt-10">
          {/* Grid for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              {
                name: "Dany Bailey",
                role: "Software Engineer",
                imgSrc: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                title: "Uncertain Days’ Feature Film Stage Reading",
                location: "Manhattan, NY",
                description: "Casting a table read for the second draft of 'Uncertain Days.'",
                datesAndLocation: "Shoots Jan. 18 in Manhattan, NY."
              },
              {
                name: "Lucy Carter",
                role: "Graphic Designer",
                imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                title: "Another Feature Film Stage Reading",
                location: "Los Angeles, CA",
                description: "Casting a table read for the first draft of 'Another Feature.'",
                datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."
              },
              {
                name: "Jade Bradley",
                role: "Dev Ops",
                imgSrc: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
                title: "Another Feature Film Stage Reading",
                location: "Los Angeles, CA",
                description: "Casting a table read for the first draft of 'Another Feature.'",
                datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."            
            },
            {
                name: "Dany Bailey",
                role: "Software Engineer",
                imgSrc: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                title: "Uncertain Days’ Feature Film Stage Reading",
                location: "Manhattan, NY",
                description: "Casting a table read for the second draft of 'Uncertain Days.'",
                datesAndLocation: "Shoots Jan. 18 in Manhattan, NY."
              },
              {
                name: "Lucy Carter",
                role: "Graphic Designer",
                imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                title: "Another Feature Film Stage Reading",
                location: "Los Angeles, CA",
                description: "Casting a table read for the first draft of 'Another Feature.'",
                datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."
              },
              {
                name: "Jade Bradley",
                role: "Dev Ops",
                imgSrc: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
                title: "Another Feature Film Stage Reading",
                location: "Los Angeles, CA",
                description: "Casting a table read for the first draft of 'Another Feature.'",
                datesAndLocation: "Shoots Jan. 20 in Los Angeles, CA."            
            },
              // Add more team members as needed
            ].map((member, index) => (
              <div key={index} className="w-full bg-black rounded-lg shadow-lg p-10 flex flex-col justify-center items-center">
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg" // Updated styling for image
                    src={member.imgSrc}
                    alt={member.name}
                  />
                </div>
                <div className="text-center">
                  <p className="text-l text-white font-bold mb-8">{member.name}</p>
                  <p className="text-base text-gray-400 font-normal mb-2">{member.role}</p>
                  <p className="text-xl text-white font-normal mb-3">{member.title}</p>
                  <p className="text-base text-gray-400 font-normal">{member.location}</p>
                   {/* Description Header */}
                   <div className="mt-4 text-l font-bold text-white">
                      Description:
                    </div>
                  <p className="text-base text-gray-400 font-normal">{member.description}</p>
                  <div className="mt-4 text-l font-bold text-white">
                      Dates and Location:
                    </div>
                  <p className="text-base text-gray-400 font-normal">{member.datesAndLocation}</p>

                  {/* Centered Buttons Section */}
                  <div className="flex gap-6 justify-center mt-6">
                    {/* Message Button (left aligned but centered in div) */}
                    <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                      <span className="ml-1">Message</span>
                    </button>

                    {/* Invite Button (right aligned but centered in div) */}
                    <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                      </svg>
                      <span className="ml-2">Invite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default FindTalent;
