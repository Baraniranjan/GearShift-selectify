import { useLocation } from 'react-router-dom';
import { Header, Footer, Section, Filters1 } from './index'
import { useState, useEffect } from 'react';
import { PreFilterDropdown } from './index';
import { filterData } from "../constants/index";

function SearchResults() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(new URLSearchParams(location.search).get('q') || '');
  const [searchResponse, setSearchResponse] = useState([]);
  const [preSelectedFilters, setPreSelectedFilters] = useState([]);
 

  const fetchFilteredResults = async () => {
    try {
      const urlParams = new URLSearchParams( location.search );
      console.log('params ' ,urlParams)
      const queryParam = urlParams.get("q") || ""; 
      console.log(location.search);
      setSearchQuery(queryParam);
      console.log(`http://localhost:5432/search?${searchQuery.toString()}`);
      const response = await fetch(`http://localhost:5432/search?${searchQuery.toString()}`);
      const data = await response.json();
      setSearchResponse(data);
      setPreSelectedFilters(data.filters || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

//   useEffect(() => {
//     const filteredProducts = filteredData.filter((product) => {
//       // Filter by gender
//       const fdata = {r: [product.roles]}
//       //console.log('f',fdata.r[0]);
//       //console.log('roles', product);
//       if (selectedFilters.gender && product.gender.toLowerCase() !== selectedFilters.gender.toLowerCase()) {
//          //console.log(product.Gender)
//         return false;
//       }

//       // Filter by years of experience (age in this case)
//       if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
//         return false;
//       }

//       // Filter by genre
//       if (selectedFilters.genres && product.genres.toLowerCase() !== selectedFilters.genres.toLowerCase()) {
//         return false;    
//       }

//       return true;
//     });

//     setFilteredData(filteredProducts);  // Update filtered data
//   }, [selectedFilters, userData]);

  useEffect(() => {
    if (searchQuery) {
      fetchFilteredResults();
    }
  }, [searchQuery]);

//   const resetFilters = () => {
//     setSelectedFilters([])
//     setFilteredData(userData)
//   };

  return (

    <div className='flex flex-col min-h-screen'>
        <Header />
    <Section>
    <div className="search-results">
      <h2>Search Results for "{searchQuery}"</h2>
      

      {/* Filters and Search Results */}
      <div className="filters">
        <PreFilterDropdown
          filterData={filterData}
          preSelectedFilters={preSelectedFilters}
          searchResponse={searchResponse}
          setSearchResponse={setSearchResponse} // Pass the function to update search response
        // Pass selected filters to PreFilterDropdown
          
        />
      </div>
      


       

      {/* Display filtered search results */}
      <div className="results">
        {searchResponse.length > 0 ? (
          searchResponse.map((item, index) => (
            <div key={index} className="result-item">
              <h3>{item.title}</h3>
              {/* Render more item data here */}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
    </Section>
    </div>
  );
}

export default SearchResults;
