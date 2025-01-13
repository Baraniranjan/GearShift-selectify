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
    
    <Section className="max-w-7xl mx-auto px-4 lg:px-10 py-12">
              <div className="mt-10">
                {/* Grid for cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {searchResponse.map((member, index) => (
                    <div key={index} className="w-full bg-black rounded-lg shadow-lg p-10 flex flex-col justify-center items-center">
                      <div className="mb-8">
                        <img
                          className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg" // Updated styling for image
                          src={member.imgSrc}
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
                        <p className="text-base text-gray-400 font-normal">{member.description}</p>
                        <div className="mt-4 text-l font-bold text-white">
                            Dates and Location:
                          </div>
                        <p className="text-base text-gray-400 font-normal">{member.datesAndLocation}</p>
      
                        {/* Centered Buttons Section */}
                        <div className="flex gap-6 justify-center mt-6">
                          {/* Message Button (left aligned but centered in div) */}
                          <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                            <span className="ml-1">Message</span>
                          </button>
      
                          {/* Invite Button (right aligned but centered in div) */}
                          <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                            </svg>
                            <span className="ml-2">Invite</span>
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
}

export default PreFilterDropdown
