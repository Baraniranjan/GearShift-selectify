import { benefits,filterData } from "../constants";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {Dropdown} from "./index"

const Benefits = () => { 

  const [category,setCategory] = useState("");
  const [userData,setUserData] = useState([])
  const [filteredData,setFilteredData] = useState([]);
  const [showfilters,setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
        gender: '',
         age: 0,
         genres: ''
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
      <div className="container relative z-2">
     
       

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
       <div className="mt-4 flex p-4 bg-gray-100 rounded-lg">
  <h4 className="text-lg font-bold text-black">Selected Filters:</h4>
  <p className="text-black"> {selectedFilters.gender || "None"}</p>
  <p className="text-black"> {selectedFilters.age || "None"}</p>
  <p className="text-black"> {selectedFilters.genres || "None"}</p>
</div>       

      </div>
     
   
      </div>
      
           <div className="search-results mt-6">
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
             </div>
    </Section>
  );
};

export default Benefits;