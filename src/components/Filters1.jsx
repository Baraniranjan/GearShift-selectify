import { useState } from 'react';

function Filters1() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const filterData = [
    {
      label: 'Gender',
      options: ['Male', 'Female'],
      name: 'gender',
    },
    {
      label: 'Age',
      options: ['20-30', '30-40', 'Above 40'],
      name: 'years',
    },
    {
      label: 'Genres',
      options: ['Action', 'Action/Drama', 'Dance', 'Musical', 'Sci-fi', 'Romance', 'Rom-Com', 'Comedy', 'Drama', 'Political Thriller'],
      name: 'genres',
    },
    {
      label: 'Skills',
      options: ['Sports', 'Dance', 'Martial Arts', 'Acting', 'Musician'],
      name: 'skills',
    },
    {
      label: 'Ethnicity',
      options: ['Asian', 'Black', 'Caucasian', 'Hispanic', 'Other'],
      name: 'ethnicity',
    },
    {
      label: 'Experience',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      name: 'experience',
    },
  ];

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-wrap w-1/2 mx-auto p-4 bg-white rounded-lg shadow-md gap-4">
      {filterData.map((filter, index) => (
        <div key={index} className="relative">
          <button
            type="button"
            className="flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => toggleDropdown(index)}
          >
            {filter.label}
          </button>

          {dropdownVisible === index && (
            <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md max-h-40 overflow-y-auto">
              <ul className="py-1 text-sm text-gray-700">
                {filter.options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Filters1;
