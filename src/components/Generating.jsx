import { searchMd } from "../assets";
import { useNavigate } from "react-router-dom";

import { useState } from "react";


const Generating = ({ className }) => {

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };
//   const handleSearch = useCallback(
//     debounce((searchTerm) => {
//       navigate(`/search?q=${newQuery}`);
//     }, 300), // Debounce for 300 milliseconds
//     [onSearch]
// );

// const handleChange = (event) => {
//     const searchTerm = event.target.value;
//     handleSubmit(searchTerm);
// };

  return (
    <form onSubmit={handleSubmit}>
      <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={searchMd} alt="Loading" onClick={() => {
            handleSubmit(new Event('submit', { cancelable: true }));
          }}/>
      <input 
        type="search"
        placeholder="Search something..." 
        className="w-full outline-none bg-transparent text-black-600 text-sm" 
        onChange={(event)=> setSearchQuery(event.target.value)}
      />
    </div>
    {/* <button type="submit">Search</button> */}

    </form>
    
  );
};

export default Generating;