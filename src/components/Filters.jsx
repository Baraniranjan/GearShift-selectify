import { useState } from 'react';
import Section from './Section';
import Dropdown from './Dropdown';

const products = [
  { id: 1, name: "Michael Jackson", category: "Dancer", age: 25, gender: 'Male', genre: 'Thriller' },
  { id: 2, name: "Asha Bhosle", category: "Singer", age: 26 },
  { id: 3, name: "Puneeth", category: "Actor", age: 25, gender: 'Male', genre: 'Rom-Com' },
  { id: 4, name: "Aditya", category: "Script-writer", age: 25 }
];

function Filters() {
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    years: '',
    genre: ''
  });

  const filterData = [
    {
      label: 'Gender',
      options: ['Male', 'Female'],
      name: 'gender'
    },
    {
      label: 'Years of Exp',
      options: ['10', '20', '30'],
      name: 'years'
    },
    {
      label: 'Genre',
      options: ['Thriller', 'Suspense', 'Sci fiction', 'Romance', 'Rom-Com', 'Comedy'],
      name: 'genre'
    },
  ];

  const handleSelect = (filterName, selectedOption) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: selectedOption,
    }));
  };

  // Filtering products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (selectedFilters.gender && product.gender && product.gender !== selectedFilters.gender) {
      return false;
    }
    if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
      return false;
    }
    if (selectedFilters.genre && product.genre && product.genre.toLowerCase() !== selectedFilters.genre.toLowerCase()) {
      return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedFilters({
      gender: '',
      years: '',
      genre: ''
    });
  };

  return (
    <Section>
      <div className="flex justify-between min-h-screen">
        {/* Left side - Filters */}
        <div className="w-full lg:w-1/4 p-4 ml-4"> {/* Added ml-4 to shift filters towards the right */}
          <div className="flex flex-row gap-4"> {/* Use flex-wrap for responsive dropdowns */}
            {filterData.map((filter, index) => (
              <Dropdown
                key={index}
                label={filter.label}
                options={filter.options}
                onSelect={(selectedOption) =>
                  handleSelect(filter.name, selectedOption)
                }
                className="w-full max-w-xs" 
              />
            ))}
          </div>

          {/* Displaying selected filters */}
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Selected Filters:</strong></p>
            <p>{selectedFilters.gender || ''}</p>
            <p>{selectedFilters.years || ''}</p>
            <p>{selectedFilters.genre || ''}</p>
          </div>

          {/* Centering Reset Filters button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={resetFilters}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Right side - Filtered Products / Logout */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-lg">
            {filteredProducts.length > 0 ? (
              <div>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 mb-4 rounded-lg">
                    <h5 className="mb-2 text-xl font-medium">{product.name}</h5>
                    <p className="mb-4 text-base">Category: {product.category}</p>
                    <p className="text-xs text-surface/75 dark:text-neutral-300">
                      Age: {product.age} - Genre: {product.genre || 'N/A'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 rounded-lg">
                  <h5 className="mb-2 text-xl font-medium">Logout</h5>
                  <p className="mb-4 text-base">
                    No products found matching the selected filters.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Filters;