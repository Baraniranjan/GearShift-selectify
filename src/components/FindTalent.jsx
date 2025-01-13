import { Header, Footer, Section, Filters1 } from './index'
import { useState, useEffect } from 'react'
import { filterData } from "../constants/index";
import { Dropdown,PreFilterDropdown } from "./index"
import Benefits from './Benefits';
import { curve, heroBackground, robot, owl } from "../assets";
import Button from "./Button";
import Generating from "./Generating";
import { useNavigate } from "react-router-dom";


function FindTalent() {

  //serach related things
  const [searchQuery, setSearchQuery] = useState("");
  const [askButton, setAskButton] = useState(false);
  const [searchResponse, setSearchResponse] = useState([]);
  const [preSelectedFilters, setPreSelectedFilters] = useState([])

  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    age: 0,
    genres: '',
    skills: '',
    experience: 0
  });
  const navigate = useNavigate();

  const profileStatic = [ 
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
  ];

  // useEffect(()=> {
  //   if(query) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(`http://localhost:5432/find-talent/${query}`);
  //         console.log('res',response);
  //         const data = await response.json();
  //         console.log('fdata',data);
  //         setSearchData(data);
  //         setFilteredData(data);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
  //     fetchData();
  //   }
  // });


  // const fetchFilteredResults = async () => {
  //   try {
  //     const queryParams = new URLSearchParams({ searchQuery, ...selectedFilters });
  //     const response = await fetch(`http://localhost:5432/find-talent/search?{query}`);
  //     // fetch(`https://api.example.com/search?query=${searchTerm}`);
  //     const data = await response.json();

  //     setSearchResponse(data);
  //     setPreSelectedFilters(data.filters || {});

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    if (askButton && searchQuery) {
      fetchFilteredResults();
    } else {
      setAskButton(false);
    }
  }, [searchQuery]);

  // const handleSelect = (filterName, selectedOption) => {
  //   setSelectedFilters((prevState) => ({
  //     ...prevState,
  //     [filterName]: selectedOption, // Update selected option for the specific filter
  //   }));
  // };

  const handleSearchChange = (event) => {
    event.preventDefault();  // Prevent default form behavior
  
    setSearchQuery(event.target.value);  // Store the search query
    setAskButton(true); // Set the ask button flag to true
  
    // Navigate to /find-talent/search?q=<searchQuery> with the query in the URL
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Section
        id="submit-section"
        //className="bg-gray-50 text-center"
        crosses={true}
      >

        <div className='relative z-1 w-fit mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'
        //className="max-w-2xl mx-auto mb-12 p-4 bg-white rounded-lg shadow-md"
        >
          <h2 className='h3 mb-3'
          //className="text-2xl font-bold text-gray-800 mb-4"
          >Submit Your Question</h2>
          <p className='body-3 max-w-3xl mx-auto mb-3 text-n-2 lg:mb-7'
          //className="text-gray-600 mb-6"
          >
            Find your character here!
          </p>
          {/* <form > */}
          {/* <input
            type="search"
            placeholder="Ask anything"
            className="w-3/4 p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 mb-6 bg-white"
            value={searchQuery}
            // onChange={(e) => handleSearchChange(e)}
          /> */}
          <Generating className="relative left-4 right-4 bottom-5 mt-16 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2
            flex items-center justify-center h-11 transition-colors text-white" 
            value={searchQuery}/>

          {/* <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={(e) => handleSearchChange(e)}
          >
            ASK!
          </button> */}
          {/* <div className="relative z-1 max-w-[62rem] mx-auto text-center">
              <Button white
              onClick={(e) => handleSearchChange(e)}>
                ASK!
              </Button>
          </div> */}

          {/* </form> */}

        <Benefits />
        </div>
        {askButton ? <div className="flex justify-center w-1/2 mx-auto p-4 bg-purple-950 rounded-lg shadow-md ">
          <div className="flex items-center flex-row gap-4">
            {/* {filterData.map((filter, index) => (
          <Dropdown
          key={index}
          label={filter.label}
          options={filter.options}
          onSelect={(selectedOption) =>
            handleSelect(filter.name, selectedOption)
          }
          selected={selectedFilters[filter.name]}
          className="w-full max-w-xs"
        />   
             ))} */}

            <PreFilterDropdown
              filterData={filterData}
              preSelectedFilters={preSelectedFilters}
              searchResponse={searchResponse}
            />
          </div>
        </div> : null}


      </Section>

      <Section className="max-w-7xl mx-auto px-4 lg:px-10 py-12">
              <div className="mt-10">
                {/* Grid for cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {profileStatic.map((member, index) => (
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

  )

}

export default FindTalent