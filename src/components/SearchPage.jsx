import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { heroBackground } from "../assets";
import PreFilterDropdown from "./PreFilterDropdown";
import { filterData } from "../constants";
import Section from "./Section"
import { Dropdown, Header, Footer } from "./index"

// const CardDetailModal = ({ member, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <div className="text-center mb-6">
//           <img
//             className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg mx-auto"
//             src={member.image_path}
//             alt={member.name}
//           />
//           <p className="text-2xl font-bold">{member.name}</p>
//           <p className="text-lg text-gray-500">{member.role}</p>
//         </div>
//         <div className="space-y-4">
//           <p><strong>Title:</strong> {member.title}</p>
//           <p><strong>Gender:</strong> {member.gender}</p>
//           <p><strong>Ethnicity:</strong> {member.ethnicity}</p>
//           <p><strong>Location:</strong> {member.location}</p>
//           <p><strong>Roles:</strong> {member.roles.join(', ')}</p>
//           <p><strong>Skills:</strong> {member.skills}</p>
//         </div>
//         <div className="mt-6 flex justify-center">
//           <button
//             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CardDetailModal = ({ member, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-4/5 max-w-4xl h-96 flex">
    
//         <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/3">
//           <img
//             className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
//             src={member.image_path}
//             alt={member.name}
//           />
//           <p className="mt-4 text-xl font-bold text-center">{member.name}</p>
//           <p className="text-lg text-gray-500 text-center">{member.role}</p>
//         </div>

//         <div className="flex-grow overflow-y-auto px-6">
//           <h2 className="text-xl font-bold mb-4">Details</h2>
//           <div className="space-y-3">
//             <p><strong>Gender:</strong> {member.gender}</p>
//             <p><strong>Experience:</strong> {member.experience}</p>
//             <p><strong>Ethnicity:</strong> {member.ethnicity}</p>
//             <p><strong>Location:</strong> {member.location}</p>
//             <p><strong>Awards:</strong> {member.awards}</p>
//             <p><strong>Roles:</strong> {member.roles.join(', ')}</p>
//             <p><strong>Skills:</strong> {member.skills.join(', ')}</p>
//           </div>
//         </div>

//         {/* Close Button */}
//         {/* <div className="absolute top-4 right-4">
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div> */}
//          <div className="mt-4 flex justify-center">
//       <button
//         className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//       </div>
//     </div>
//   );
// };

const CardDetailModal = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
   >
      <div className="bg-white p-6 rounded-lg w-4/5 max-w-4xl flex relative">

        {/* Close Button (X at the top-right corner) */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/3">
          <img
            className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
            src={member.image_path}
            alt={member.name}
          />
          <p className="mt-4 text-xl font-bold text-center">{member.name}</p>
          <p className="text-lg text-gray-500 text-center">{member.role}</p>
        </div>

        <div className="flex-grow px-6">
          <h2 className="text-xl font-bold mb-4">Details</h2>
          <div className="space-y-3">
            <p><strong>Gender:</strong> {member.gender}</p>
            <p><strong>Experience:</strong> {member.experience} years</p>
            <p><strong>Ethnicity:</strong> {member.ethnicity}</p>
            <p><strong>Location:</strong> {member.location}</p>
            <p><strong>Awards:</strong> {member.awards}</p>
            <p><strong>Roles:</strong> {member.roles.join(', ')}</p>
            <p><strong>Skills:</strong> {member.skills.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const staticData = [
  {
    "age": 30,
    "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
    "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
    "email": "amara.chen@email.com",
    "ethnicity": "Asian (Chinese)",
    "experience": 12,
    "gender": "Female",
    "image_path": "/candidates/amara.chen.jpg",
    "location": "Singapore",
    "name": "Amara Chen",
    "phone": "+65 9876125432",
    "roles": [
        "Singer",
        "Musician"
    ],
    "score": 85,
    "skills": [
        "Singer",
        "Musician",
        "Song writing",
        "Live Performance",
        "Multilingual"
    ]
},
{
  "age": 30,
  "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
  "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
  "email": "amara.chen@email.com",
  "ethnicity": "Asian (Chinese)",
  "experience": 12,
  "gender": "Female",
  "image_path": "/candidates/amara.chen.jpg",
  "location": "Singapore",
  "name": "Amara Chen",
  "phone": "+65 9876125432",
  "roles": [
      "Singer",
      "Musician"
  ],
  "score": 85,
  "skills": [
      "Singer",
      "Musician",
      "Song writing",
      "Live Performance",
      "Multilingual"
  ]
},
{
  "age": 30,
  "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
  "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
  "email": "amara.chen@email.com",
  "ethnicity": "Asian (Chinese)",
  "experience": 12,
  "gender": "Female",
  "image_path": "/candidates/amara.chen.jpg",
  "location": "Singapore",
  "name": "Amara Chen",
  "phone": "+65 9876125432",
  "roles": [
      "Singer",
      "Musician"
  ],
  "score": 85,
  "skills": [
      "Singer",
      "Musician",
      "Song writing",
      "Live Performance",
      "Multilingual"
  ]
},
{
  "age": 30,
  "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
  "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
  "email": "amara.chen@email.com",
  "ethnicity": "Asian (Chinese)",
  "experience": 12,
  "gender": "Female",
  "image_path": "/candidates/amara.chen.jpg",
  "location": "Singapore",
  "name": "Amara Chen",
  "phone": "+65 9876125432",
  "roles": [
      "Singer",
      "Musician"
  ],
  "score": 85,
  "skills": [
      "Singer",
      "Musician",
      "Song writing",
      "Live Performance",
      "Multilingual"
  ]
},
]

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  // const [cartItems, setCartItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Store the selected card data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    age: 0,
    genres: '',
    ethnicity: '',
    experience: 0
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

      if (selectedFilters.gender && product.gender.toLowerCase() !== selectedFilters.gender.toLowerCase()) {
        return false;
      }

      if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
        return false;
      }

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

  const handleCardClick = (member) => {
    setSelectedCard(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleSelect = (filterName, selectedOption) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: selectedOption, // Update selected option for the specific filter
    }));
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
    <div className="flex flex-col min-h-screen"
      style={{
        background: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: -1,
      }}
    >
      <Header className="mb-1" />
      <Section className="max-w-7xl mx-auto lg:py-20 px-4 lg:px-10 py-12 mt-1">
        {/* <div className="flex flex-row gap-4 justify-center">
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
               

      </div> */}
        <div className="flex w-full justify-center mx-auto p-4 rounded-lg shadow-md ">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 justify-center">
              {(filterData.map((filter, index) => (
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

              )))}
              {<div className="">
                <button
                  onClick={resetFilters}
                  className="bg-blue-500 text-white p-2 rounded-md font-semibold w-full max-w-xs"
                //    "flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-black font-semibold shadow-sm ring-1 ring-inset ring-gray-300 bg-n-14 hover:bg-white"
                >
                  Reset Filters
                </button>
              </div>}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10" >
            {filteredData.map((member, index) => (
              <div key={index} className="w-full bg-black rounded-lg shadow-lg p-8 flex flex-col justify-between h-full cursor-pointer relative" onClick={() => handleCardClick(member)}>

<div
          className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full flex justify-center items-center 
                      ${member.score > 80 ? 'bg-green-800' : 'bg-orange-800'} text-white text-xl font-bold`}
        //   style={{
        //     clipPath: 'polygon(100% 0, 0 0, 0 100%)', // Creates the quarter-circle shape
        //   }}
        style={{ borderBottomLeftRadius: '100%' }}
        >
          {member.score}
        </div>

                <div className="mb-6 flex justify-center">
                  <img
                    className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
                    src={member.image_path}
                    alt={member.name}
                  />
                </div>
                <div className="text-center flex flex-col justify-between h-full">
                  <p className="text-l text-white font-bold mb-1">{member.name}</p>
                  <p className="text-base text-gray-400 font-normal">{member.location}</p>
                  <p className="text-base text-gray-400 font-normal mb-1">{member.role}</p>
                  <p className="text-base text-gray-400 font-normal mb-1"> Experience :{member.experience} years</p>
                  <p className="text-xl text-white font-normal mb-1">{member.title}</p>

                  <div className="mt-1 text-l font-bold text-white">
                    Ethnicity : {member.ethnicity}
                  </div>
                  {/* <p className="text-base text-gray-400 font-normal">{member.ethnicity}</p> */}

                  <div className="mt-1 text-l font-bold text-white">
                    Roles : {member.roles.join(', ')}
                  </div>
                  {/* <p className="text-base text-gray-400 flex justify-center font-normal">{member.roles.join(', ')}</p> */}
                </div>

                <div className="flex gap-6 justify-center mt-6">
                  <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <button className="ml-1">Email</button>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                    </svg>
                    <button className="ml-2">Add to Movie</button>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Section>
      <Footer />
      {isModalOpen && selectedCard && (
        <CardDetailModal member={selectedCard} onClose={closeModal} />
      )}
    </div>
  );
};

export default SearchPage;