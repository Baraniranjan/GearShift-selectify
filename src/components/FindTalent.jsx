import {Header, Footer, Section, Filters1} from './index'
import {useState} from 'react'
import Button from "./Button";
import { Link } from "react-router-dom";
 
 
function FindTalent() {
 
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
       <Footer/>
 
        </div>
      
    )
 
}
 
export default FindTalent