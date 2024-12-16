import React, { useState, useEffect } from 'react';
import Section from './Section';
import Dropdown from './Dropdown';

const initialProducts = [
  { id: 1, name: "Michael Jackson", category: "Dancer", age: 25, gender: 'Male', genre: 'Thriller' },
  { id: 2, name: "Asha Bhosle", category: "Singer", age: 26 },
  { id: 3, name: "Puneeth", category: "Actor", age: 25, gender: 'Male', genre: 'Rom-Com' },
  { id: 4, name: "Aditya", category: "Script-writer", age: 25 }
];

function Filter() {
    const [selectedFilters, setSelectedFilters] = useState({
      gender: '',
      years: '',
      genre: ''
    });

    const [products, setProducts] = useState([]);
    let [filteredProducts, setFilteredProducts] = useState([]);
    const [query, setQuery] = useState('');

    const filterData = [
        { label: 'Gender', options: ['Male', 'Female'], name: 'gender' },
        { label: 'Years of Exp', options: ['10', '20', '30'], name: 'years' },
        { label: 'Genre', options: ['Thriller', 'Suspense', 'Sci fiction', 'Romance', 'Rom-Com', 'Comedy'], name: 'genre' },
      ];

    //   useEffect(() => {
    //     setProducts(initialProducts); // Simulating fetching data
    //     setFilteredProducts(initialProducts); // Set initial products as filtered products
    //   }, []);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((fetchedProducts) => {
            setProducts(fetchedProducts);
            setFilteredProducts(fetchedProducts); 
        });
      }, []);

      useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        console.log('params ' ,urlParams)
        const queryParam = urlParams.get("q") || ""; 
    
        console.log('search param - ',queryParam)
        setQuery(queryParam);
      }, []); 

      const handleSelect = (filterName, selectedOption) => {
        setSelectedFilters((prevState) => {
          const newFilters = {
            ...prevState,
            [filterName]: selectedOption
          };
        //   applyFilters(newFilters); // Apply filters after setting the selected filter
        //   return newFilters;
        });
      };

    // filteredProducts = products.filter((product) => {
    //     // Filter by gender
    //     if (selectedFilters.gender && product.gender !== selectedFilters.gender.toLowerCase()) {
    //         return false;
    //     }

    //     // Filter by years of experience (you can match against the age or add a custom years field)
    //     if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
    //         return false;
    //     }

    //     // Filter by genre
    //     if (selectedFilters.genre && product.genre && product.genre.toLowerCase() !== selectedFilters.genre.toLowerCase()) {
    //         return false;
    //     }

    //     return true;
    // });

    const applyFilters = () => {
        let updatedProducts = [...filteredProducts];
    
        // Apply filters based on selected options
        if (selectedFilters.gender) {
          updatedProducts = updatedProducts.filter(
            (product) => product.gender === selectedFilters.gender
          );
        }
    
        if (selectedFilters.years) {
          updatedProducts = updatedProducts.filter(
            (product) => product.age === parseInt(selectedFilters.years)
          );
        }
    
        if (selectedFilters.genre) {
          updatedProducts = updatedProducts.filter(
            (product) => product.genre && product.genre.toLowerCase() === selectedFilters.genre.toLowerCase()
          );
        }
    
        setFilteredProducts(updatedProducts); // Update filtered products
      };

      useEffect(() => {
        applyFilters();
      }, [selectedFilters, products]);

    const resetFilters = () => {
        setSelectedFilters({
          gender: '',
          years: '',
          genre: ''
        });
        setFilteredProducts(products); // Reset filtered products to the initial ones
      };

    //   filteredProducts = (filteredProducts, query) => {
    //     const cleanedQuery = query.toLowerCase().trim(); // Normalize the query
      
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
        
    //     const cleanedQuery = query.toLowerCase().trim();
    // useEffect(() => {
    //         console.log(cleanedQuery);
    //         if (!cleanedQuery) {
    //           setFilteredProducts(products);
    //           return;
    //         }
    //         const timeout = setTimeout(() => {
    //           const searched = products.filter((product) => {
    //             return Object.values(product)
    //               .join("")
    //               .toLowerCase()
    //               .includes(cleanedQuery.toLowerCase());
    //           });
    //           setFilteredProducts(searched);
    //         }, 500);
    //         return () => clearTimeout(timeout);
    //       }, [cleanedQuery, products]);  
    const searchNestedObject = (obj, query) => {
        if (typeof obj !== 'object' || obj === null) return false;
    
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
    
            // If it's an object, recurse into it
            if (typeof value === 'object') {
              const nestedResult = searchNestedObject(value, query);
              if (nestedResult) return true;
            }
    
            // Check if the value matches the query
            if (value && value.toString().toLowerCase().includes(query)) {
              return true;
            }
          }
        }
        return false;
      };
    
      // Apply filters and search in useEffect
      useEffect(() => {
        const cleanedQuery = query.toLowerCase().trim(); // Normalize the query
    
        if (!cleanedQuery) {
          setFilteredProducts(products);
          return;
        }
    
        const timeout = setTimeout(() => {
          const searchedProducts = products.filter((product) =>
            searchNestedObject(product, cleanedQuery)
          );
          setFilteredProducts(searchedProducts); // Update the filtered products
        }, 500);
    
        return () => clearTimeout(timeout); // Clean up the timeout if query changes quickly
      }, [query, products]);


    return (<Section>
        <div className="flex justify-between min-h-screen">
          {/* Left side - Filters */}
          <div className="w-full lg:w-1/4 p-4 ml-4">
            <div className="flex flex-col gap-4">
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
  
            {/* Reset Filters Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={resetFilters}
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Reset Filters
              </button>
            </div>
          </div>
  
          {/* Right side - Search Results / Filtered Products */}
          <div className="flex-1 p-4">
            <div className="w-full max-w-lg mx-auto">
              <center>
                <h1 className="flex justify-center">Search Results</h1>
              </center>
  
             
  
              {/* Display Filtered Products */}
              <div className="search-results mt-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div key={product.id} className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 mb-4 rounded-lg">
                      <h5 className="mb-2 text-xl font-medium text-black">{product.name}</h5>
                      <p className="mb-4 text-base text-black">Category: {product.category}</p>
                      <p className="text-xs text-surface/75 dark:text-neutral-300">
                        Age: {product.age} - Genre: {product.genre || 'N/A'}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No products found matching the selected filters and search query.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
}    

export default Filter