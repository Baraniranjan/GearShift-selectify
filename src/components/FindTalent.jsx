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
      <Footer />

    </div>

  )

}

export default FindTalent