import { benefits,filterData } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {Dropdown} from "./index"
import { heroBackground } from "../assets";

const Benefits = () => { 

  const [category,setCategory] = useState("");
  const [userData,setUserData] = useState([])
  const [filteredData,setFilteredData] = useState([]);
  const [showfilters,setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
        gender: '',
         age: 0,
         genres: '',
         ethnicity:'',
         experience:0
  });

  useEffect(() => {
    if(category) {
      const fetchData = async () => {
        try {
         
          const response = await fetch(`http://localhost:5432/profiles/${category}`);
          console.log('res',response);
          const data = await response.json();
          console.log('fdata',data);
          setUserData(data);
          setFilteredData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  },[category]);

  const handleSelect = (filterName, selectedOption) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: selectedOption, // Update selected option for the specific filter
    }));
  };

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
     const resetFilters = () => {
         setSelectedFilters([])
         setFilteredData(userData)
       };


  const handleClick =(title) => {
    setShowFilters(true);
    setCategory(title);
  }
 
  return (
    <Section id="features" className="py-0!">
      <div className="container relative z-2"
      //  style={{
      //           background: `url(${heroBackground})`,
      //           backgroundSize: 'cover',
      //           backgroundPosition: 'center center',
      //           zIndex: -1,
      //         }}
      >
     
       

        <div className="flex flex-wrap gap-5 mb-5">
        
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[18rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              onClick={() => handleClick(item.title)}
            >

              <div className="relative z-2 flex flex-col min-h-[8.5rem] p-[1.5rem] pointer-events-none">
              <div className="flex items-center mt-1">
                  <img
                    src={item.iconUrl}
                    width={36}
                    height={36}
                    alt={item.title}
                  />
                  <h5 className="ml-auto pl-3 font-bangers text-lg/3">
                    {item.title}
                  </h5>
                  {/* <Arrow className="p-0" /> */}
                </div>
                
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <p className="mt-5 m-auto font-code text-[0.75rem] font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                </p>
              </div>

              {item.light && <GradientLight />}

             

              <ClipPath />
            </div>
          ))}
        </div>  
       
            


        
      </div>
      <div classNAme="flex w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md ">
      <div className="flex flex-row gap-4 justify-center">
      {showfilters ? (filterData.map((filter, index) => (
            <div className="flex ">
          <Dropdown
          key={index}
          label={filter.label}
          options={filter.options}
          onSelect={(selectedOption) =>
            handleSelect(filter.name, selectedOption)
          }
          className="w-full max-w-xs"
          />   
          
          </div>
          
             ))) : null} 

      </div>
     
   
      </div>
      
           {/* <div className="search-results mt-6">
               {filteredData.length > 0 ? (
                 filteredData.map((product) => (
                   <div key={product.id} className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 mb-4 rounded-lg">
                     <h5 className="mb-2 text-xl font-medium text-black">{product.name}</h5>
                     <p className="mb-2 text-base text-black">Email: {product.email}</p>
                     <p className="mb-2 text-base text-black">Gender: {product.gender}</p>
                     <p className="mb-2 text-base text-black">
                       Age: {product.age} <p>
                        Genre: {product.genres || 'N/A'}</p>
                     </p>
                     <p className="mb-4 text-base text-black">Ethnicity: {product.ethnicity}</p>
                     <p className="mb-4 text-base text-black">Skills: {product.skills.join(', ')}</p>
                   </div>
                 ))
               ) : (
                 <p>No products found matching the selected filters.</p>
               )}
             </div> */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                    <span className="ml-2">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Section>
  );
};

export default Benefits;