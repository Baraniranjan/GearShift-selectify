import { Dropdown } from "./index"
import { useState,useEffect } from "react";

function PreFilterDropdown({ filterData, preSelectedFilters, searchResponse,setSearchResponse }) {
  // Filter preselected and remaining filters
  // const preSelectedItems = filterData.filter((filter) =>{
  //   preSelectedFilters.includes(filter.name)
  //   console.log('filter data item-', filter.name);

  // }
    
  //);

  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    age: 0,
    genres: '',
    skills: '',
    experience: 0,
    ethnicity:''
  });
 //const [localSelectedFilters, setLocalSelectedFilters] = useState(selectedFilters);

    const filterSearchResponse = (response) => {
      return response.filter((item) => {
        // Filter by gender
        if (selectedFilters.gender && item.gender.toLowerCase() !== selectedFilters.gender.toLowerCase()) {
          return false;
        }
        // Filter by age (experience in this case)
        if (selectedFilters.age && item.age !== selectedFilters.age) {
          return false;
        }
        // Filter by genre
        if (selectedFilters.genres && item.genres.toLowerCase() !== selectedFilters.genres.toLowerCase()) {
          return false;
        }
        // Filter by skills
        if (selectedFilters.skills && !item.skills.includes(selectedFilters.skills)) {
          return false;
        }
        // Filter by experience (if applicable)
        if (selectedFilters.experience && item.experience !== selectedFilters.experience) {
          return false;
        }
  
        return true; // Return true if all filters match
      });
    };

    // const filterSearchResponse = (response) => {
    //   return response.filter((item) => {
    //     // Filter by gender
    //     if (localSelectedFilters.gender && item.gender.toLowerCase() !== localSelectedFilters.gender.toLowerCase()) {
    //       return false;
    //     }
    //     // Filter by age
    //     if (localSelectedFilters.age && item.age !== localSelectedFilters.age) {
    //       return false;
    //     }
    //     // Filter by genre
    //     if (localSelectedFilters.genres && item.genres.toLowerCase() !== localSelectedFilters.genres.toLowerCase()) {
    //       return false;
    //     }
    //     // Filter by skills
    //     if (localSelectedFilters.skills && !item.skills.includes(localSelectedFilters.skills)) {
    //       return false;
    //     }
    //     // Filter by experience
    //     if (localSelectedFilters.experience && item.experience !== localSelectedFilters.experience) {
    //       return false;
    //     }
    //     // Filter by ethnicity (added this as per your state)
    //     if (localSelectedFilters.ethnicity && item.ethnicity.toLowerCase() !== localSelectedFilters.ethnicity.toLowerCase()) {
    //       return false;
    //     }
  
    //     return true;
    //   });
    // };
    useEffect(() => {
      // Re-filter the search response when selectedFilters changes
      if (searchResponse.length > 0) {
        const filtered = filterSearchResponse(searchResponse);
        setSearchResponse(filtered);
      }
    }, [selectedFilters]);

  const preSelectedItems = filterData.filter((filter) =>
    Object.keys(preSelectedFilters).includes(filter.name)
  );
  console.log('filter data items-', filterData);
  console.log('preselected items-', preSelectedFilters);

  // const remainingItems = filterData.filter(
  //   (filter) => !preSelectedFilters.includes(filter.name)
  // );

  const remainingItems = filterData.filter(
    (filter) => !Object.keys(preSelectedFilters).includes(filter.name)
  );


 

  const handleSelect = (filterName, selectedOption) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: selectedOption, // Update selected option for the specific filter
    }));
  };

  return (
    <div className="flex flex-col">
    {/* Preselected Filters */}
    <div>
      <h3 className="text-black font-bold">Preselected Filters:</h3>
      {preSelectedItems.map((filter, index) => (
        <div key={index} className="flex flex-row gap-4">
          <span className="text-white">
            {filter.label}: {preSelectedFilters[filter.name]}
          </span>
        </div>
      ))}
    </div>

    {/* Remaining Filters */}
    <div>
      <h3 className="text-black font-bold">Available Filters:</h3>
      <div className="flex flex-row gap-4">
        {remainingItems.map((filter, index) => (
          <Dropdown
            key={index}
            label={filter.label}
            options={filter.options}
            onSelect={(selectedOption) =>{
              handleSelect(filter.name, selectedOption)
              console.log(`Selected ${selectedOption} for ${filter.name}`)
            }
              
            }
            className="w-full max-w-xs"
          />
        ))}
      </div>
      {/* <div className="mt-4 flex p-4 bg-gray-100 rounded-lg">
  <h4 className="text-lg font-bold text-black">Selected Filters:</h4>
  <p className="text-black"> {selectedFilters.gender || "None"}</p>
  <p className="text-black"> {selectedFilters.age || "None"}</p>
  <p className="text-black"> {selectedFilters.genres || "None"}</p>
</div> */}
    </div>
  </div>
  );
}

export default PreFilterDropdown
