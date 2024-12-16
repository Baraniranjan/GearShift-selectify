import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const location = useLocation(); // Get the current location (URL)

  // Fetch the data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Get the search query from the URL (if it exists)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log('params ' ,urlParams)
    const queryParam = urlParams.get("q") || ""; 
    // Default to empty string if no query is found
    console.log('search param - ',queryParam)
    setQuery(queryParam);
  }, [location.search]); // Re-run whenever the query parameter in URL changes


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
const search = (data, query) => {
    const cleanedQuery = query.toLowerCase().trim(); // Normalize the query
  
    const searchNestedObject = (obj, query) => {
      // Recursively search through the object (including nested objects)
      if (typeof obj !== 'object' || obj === null) return '';
  
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          
          // If it's an object, recurse into it
          if (typeof value === 'object') {
            const nestedResult = searchNestedObject(value, query);
            if (nestedResult) return nestedResult;
          }
          
          // Check if the value matches the query
          if (value && value.toString().toLowerCase().includes(query)) {
            return true;
          }
        }
      }
      return false;
    };
    return data.filter((dataObj) =>
        searchNestedObject(dataObj, cleanedQuery) // Filter based on the search function
      );
    };

    return (
        <div className="container">
          <center>
            <h1>Search Results for "{query}"</h1>
          </center>
      
          <div className="search-results">
            {search(data, query).length > 0 ? (
              search(data, query).map((dataObj) => (
                <div className="box" key={dataObj.id}>
                  <div className="card">
                    <div className="category">@{dataObj.username}</div>
                    <div className="heading">
                      {dataObj.name}
                      <div className="author">{dataObj.email}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      );



};

export default SearchPage;