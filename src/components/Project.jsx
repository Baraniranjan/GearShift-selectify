import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import { actor, camera, dancer, scriptwriter, singer, vfxartist, voice } from "../assets";
import { heroBackground } from "../assets";
import { filterData } from "../constants";
import {Dropdown} from "./index"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const [category, setCategory] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showfilters,setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
     age: 0,
     genres: '',
     ethnicity:'',
     experience:0
});
  //const [cartItems, setCartItems] = useState([]);
  
  const projects = [
    { id:"1",title: "Actor", description: "Design & Development", imgUrl: actor },
    { id:"2",title: "Camera", description: "Design & Development", imgUrl: camera },
    { id:"3",title: "Dancer", description: "Design & Development", imgUrl: dancer },
    { id:"4",title: "Script Writer", description: "Design & Development", imgUrl: scriptwriter },
    { id:"5",title: "Singer", description: "Design & Development", imgUrl: singer },
    { id:"6",title: "VFX Artist", description: "Design & Development", imgUrl: vfxartist },
    { id:"7",title: "Voice Artist", description: "Design & Development", imgUrl: voice },
  ];

  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5432/profiles/${category}`);
          const data = await response.json();
          setUserData(data);
          setFilteredData(data);  // Update with fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [category]);

  useEffect(() => {
    const filteredProducts = filteredData.filter((product) => {
      // Filter by gender
      const fdata = {r: [product.roles]}
      //console.log('f',fdata.r[0]);
      //console.log('roles', product);
      if (selectedFilters.gender && product.gender.toLowerCase() !== selectedFilters.gender.toLowerCase()) {
         //console.log(product.Gender)
        return false;
      }

      // Filter by years of experience (age in this case)
      if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
        return false;
      }

      // Filter by genre
      if (selectedFilters.genres && product.genres.toLowerCase() !== selectedFilters.genres.toLowerCase()) {
        return false;    
      }

      if (selectedFilters.ethnicity && product.ethnicity.toLowerCase() !== selectedFilters.ethnicity.toLowerCase()) {
       return false;    
     }

     if (selectedFilters.experience && parseInt(selectedFilters.experience) !== product.experience) {
       return false;
     }

      return true;
    });

    setFilteredData(filteredProducts);  // Update filtered data
  }, [selectedFilters, userData]);

  // Handle clicking on the description to fetch category data
  const handleClick = (title) => {
    setShowFilters(true);
    setCategory(title); // Set the category to fetch the corresponding data
    setTimeout(() => {
        const resultsSection = document.getElementById('filteredResults');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
  };

  const handleSelect = (filterName, selectedOption) => {
    event.preventDefault();
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: selectedOption, // Update selected option for the specific filter
    }));
  };

  const resetFilters = () => {
    setSelectedFilters([])
    setFilteredData(userData)
  };

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//         const itemExists = prevItems.find((item) => item.id === product.id);
//         if (itemExists) {
//             return prevItems.map((item) =>
//                 item.id === product.id ? { ...item, quantity: 
//                 item.quantity + 1 } : item
//             );
//         } else {
//             return [...prevItems, { ...product, quantity: 1 }];
//         }
//     });
// };

  return (
    <section className="project" id="projects">
      <div
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Row>
                    {
                      projects.map((project, index) => (
                        <ProjectCard
                          key={project.title}
                          {...project}
                          handleClick={handleClick}  // Pass handleClick to ProjectCard
                        />
                      ))
                    }
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="" alt="Background shape" />

      <div classNAme="flex w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md ">
      <div className="flex flex-row gap-4 justify-center">
      {showfilters ? (filterData.map((filter, index) => (
            <div className="flex ">
          <Dropdown
          key={filter.label}
          label={filter.label}
          options={filter.options}
          onSelect={(selectedOption) =>
            handleSelect(filter.name, selectedOption)
          }
          className="w-full max-w-xs"
          /> 
            
          
          </div>
          
             ))) : null}
      {showfilters? <div className="flex justify-center mt-4">
             <button
               onClick={resetFilters}
               className="bg-blue-500 text-white p-2 rounded-md"
             >
               Reset Filters
             </button>
           </div> : null}       
              

      </div>
      
   
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10" id="filteredResults">
          {filteredData.map((member, index) => (
            <div key={index} className="w-full bg-black rounded-lg shadow-lg p-10 flex flex-col justify-center items-center">
              <div className="mb-8">
                <img
                  className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg" // Updated styling for image
                  src={member.image_path}
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
                <p className="text-base text-gray-400 font-normal">{member.skills}</p>
               
              

                {/* Centered Buttons Section */}
                <div className="flex gap-6 justify-center mt-6">
                  {/* Message Button (left aligned but centered in div) */}
                  <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <span className="ml-1">Mail</span>
                  </button>

                  {/* Invite Button (right aligned but centered in div) */}
                  <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                    </svg>
                    <span className="ml-2">Add to Movie</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};
