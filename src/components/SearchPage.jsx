import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PreFilterDropdown from "./PreFilterDropdown";
import { filterData } from "../constants";
import Section from "./Section"
import {Dropdown} from "./index"

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData ] = useState([]);
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
     age: 0,
     genres: '',
     ethnicity:'',
     experience:0
});
  console.log(query);
  const location = useLocation(); // Get the current location (URL)
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   console.log('params ', urlParams);  // Check what URLSearchParams contains
  //   const queryParam = urlParams.get("q"); 
  //   console.log('search param - ', queryParam);  // Check the queryParam value
    
  //   setQuery(queryParam || '');  // Set default to empty string if queryParam is not found
  // }, [location.search]); // Re-run whenever the query parameter in URL changes
  
  // // Fetch the data when the component mounts
  // useEffect(() => {
  //   async() => {
  //     console.log('Current query:', query);  // Log the query value whenever it changes
  //   if (query) {
  //     const response = await fetch(`http://localhost:5432/search?q=${query}`);
  //     const data = await response.json();
  //     setData(data.results);
  //     console.log('response data - ',data.results);
  //     // fetch(`http://localhost:5432/search?q=${query}`)
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     setData(data.results);
  //     //     console.log('data 0 - ', data);
  //     //   })
  //     //   .catch((error) => console.error('Error fetching data:', error));
  //   }

  //   }
    
  // }, [query]); // Dependency on query

  // // Get the search query from the URL (if it exists)
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   console.log('params ' ,urlParams)
  //   const queryParam = urlParams.get("q") || ""; 
  //   // Default to empty string if no query is found
  //   console.log('search param - ',queryParam)
  //   setQuery(queryParam);
  // }, [location.search]); // Re-run whenever the query parameter in URL changes

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const queryParam = urlParams.get("q") || ''; // Default to empty string if no query is found
    setQuery(queryParam);
}, [location.search]);

useEffect(() => {
  const fetchData = async () => {
      console.log('Current query:', query);
      if (query) {
          try {
              const response = await fetch(`http://localhost:5432/search?q=${query}`);
              const data = await response.json();
              setData(data.results);
              setFilteredData(data.results);
              console.log('response data - ', data.results);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }
  };

  fetchData();  // Call the async function
}, [query]); 


useEffect(() => {
  const filteredProducts = filteredData.filter((product) => {
    // Filter by gender
   // const fdata = {r: [product.roles]}
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
}, [selectedFilters, data]);
 // Dependency on query
 const resetFilters = () => {
  setSelectedFilters([])
  setFilteredData(data)
};


//   const cleanQuery = (query) => query.trim().toLowerCase();
//   const search_params = Object.keys(Object.assign({}, ...data));

  // Function to search the data
//   function search(data, query) {
//     const cleanedQuery = cleanQuery(query);  // Clean the query
  
    // return data.filter((dataObj) =>
    //   search_params.some((param) => {
    //     // Ensure the property exists and convert it to string for comparison
    //     const value = dataObj[param]?.toString().toLowerCase();
    //     return value && value.includes(cleanedQuery);
    //   })
    // );
  //}

//   return (
//     <div className="container">
//       <center>
//         <h1>Search Results for "{query}"</h1>
//       </center>

//       <div className="search-results">
//       <div className="search-results">
//       {search(data, query).length > 0 ? (
//         search(data, query).map((dataObj) => {
//           return (
//             <div className="box" key={dataObj.id}>
//               <div className="card">
//                 <div className="category">@{dataObj.username}</div>
//                 <div className="heading">
//                   {dataObj.name}
//                   <div className="author">{dataObj.email}</div>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
   
//       </div>
//     </div>
//   );
// const search = (data, query) => {
//     const cleanedQuery = query;
//     //.toLowerCase().trim(); // Normalize the query
  
//     const searchNestedObject = (obj, query) => {
//       // Recursively search through the object (including nested objects)
//       if (typeof obj !== 'object' || obj === null) return '';
  
//       for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           const value = obj[key];
          
//           // If it's an object, recurse into it
//           if (typeof value === 'object') {
//             const nestedResult = searchNestedObject(value, query);
//             if (nestedResult) return nestedResult;
//           }
          
//           // Check if the value matches the query
//           if (value && value.toString().toLowerCase().includes(query)) {
//             return true;
//           }
//         }
//       }
//       return false;
//     };
//     return data.filter((dataObj) =>
//         searchNestedObject(dataObj, cleanedQuery) // Filter based on the search function
//       );
//     };

    return (
      <div>
         <Header />
         <Section className="max-w-7xl mx-auto px-4 lg:px-10 py-12">
         <div className="flex flex-row gap-4 justify-center">
      {filterData.map((filter, index) => (
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
          
             ))}
      <div className="flex justify-center mt-4">
             <button
               onClick={resetFilters}
               className="bg-blue-500 text-white p-2 rounded-md"
             >
               Reset Filters
             </button>
           </div> 
           {/* <Link to="/home">     
      <div className="bg-n-14"> Back to Home</div>         */}

      </div>
      <div className="mt-10">
        {/* Grid for cards */}
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
              <div className="text-center"

              >
                <p className="text-l text-white font-bold mb-8">{member.name}</p>
                <p className="text-base text-gray-400 font-normal mb-2">{member.role}</p>
                <p className="text-xl text-white font-normal mb-3">{member.title}</p>
                <p className="text-base text-gray-400 font-normal">{member.gender}</p>
                <div className="mt-4 text-l font-bold text-white">
                    Ethnicity
                  </div>
                <p className="text-base text-gray-400 font-normal">{member.ethnicity}</p>
                <p className="text-base text-gray-400 font-normal">{member.location}</p>
 
                <div className="mt-4 text-l font-bold text-white">
                    Roles
                  </div>
                <p className="text-base text-gray-400 flex justify-center font-normal">{member.roles}</p>

                {/* Centered Buttons Section */}
                <div className="flex gap-6 justify-center mt-6">
                  {/* Message Button (left aligned but centered in div) */}
                  <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <span className="ml-1">Email</span>
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
      </div>
    </Section>
      </div>
      
      );



};

export default SearchPage;