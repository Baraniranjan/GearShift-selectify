import {Header, Section, Footer} from './index';
import { useLocation, useParams } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import Dropdown from './Dropdown'
 
// const customers = [
//  {
//    name: "Tania Andrew",
//    email: "tania@gmail.com",
//    price: 400,
//    image:
//      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
//  },
//  {
//    name: "John Micheal",
//    email: "john@gmail.com",
//    price: 420,
//    image:
//      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
//  },
//  {
//    name: "Alexa Liras",
//    email: "alexa@gmail.com",
//    price: 340,
//    image:
//      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
//  },
//  {
//    name: "Richard Gran",
//    email: "richard@gmail.com",
//    price: 520,
//    image:
//      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
//  },
//  {
//    name: "Micheal Levi",
//    email: "levi@gmail.com",
//    price: 780,
//    image:
//      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
//  },
// ];
 

 
function Category(item) {
    
   console.log('item ---',item)
 
 
   const url = "https://jsonplaceholder.typicode.com/users";
   const [userData, setUserData] = useState([]);
   const [filteredItems, setFilteredItems] = useState([]);
   const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    age: '',
    genres: ''
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


 
//   const fetchUsers = () => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((d) => setUserData(d))
//       .catch((error) => {
//         console.error('There was a problem with the fetch operation:', error);
//       });
//   };
  console.log('fetched users- ',userData);
 
  useEffect(() => {
    const posts = [
        {
          title: "Singer",
          description: "Description of your post/article, Description of your post/article.",
          imageUrl: "https://via.placeholder.com/150",
          link: "https://amitpachange.com",
          age: 24,
          gender:"male",
          genres:"thriller"
        },
        {
          title: "Singer",
          description: "Another description of your post/article.",
          imageUrl: "https://via.placeholder.com/150",
          link: "https://example.com",
          age:24,
          gender:"female",
          genres:"thriller"
        },
        {
          title: "Singer",
          description: "Yet another description of your post/article.",
          imageUrl: "https://via.placeholder.com/150",
          link: "https://example.org",
          age:25,
          gender:"male",
          genres:"thriller"
        },
      ];
      setUserData(posts);
      setFilteredItems(posts);  
  }, []);
 
  const applyFilters = () => {
    let filteredData = [...userData];
    if (selectedFilters.gender) {
        filteredData = filteredData.filter(item => item.category === selectedFilters.category);
      }
    
      if (selectedFilters.genres) {
        filteredData = filteredData.filter(item => item.genres === selectedFilters.genres);
      }

      if (selectedFilters.age) {
        filteredData = filteredData.filter(item => item.age === selectedFilters.age);
      }
      setFilteredItems(filteredData);  
  }
//   const filteredProducts = products.filter((product) => {
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

const handleSelect = (filterName, value) => {
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters, [filterName]: value };
      applyFilters(newFilters);  // Re-apply filters whenever any change happens
      return newFilters;
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      gender: '',
      years: '',
      genre: ''
    });
    setFilteredProducts(posts); // Reset filtered products to the initial ones
  };

const location = useLocation();  // Access the location object (state)
const { title } = useParams();  // Access the route parameter (e.g., 'Singer')
 
// Fetch the users data by matching the item title passed via route
//const users = userData.filter(post => post.title === title);
//console.log('users --', users)
 
 
   
return (
    <>
    <Header/>
    <Section>
      <div className="container relative z-2 min-h-screen flex justify-center flex-col gap-4">
        {/* Left side - Filters */}
        <div className="w-full lg:w-1/4 p-4 ml-4">
          <div className="flex  gap-4">
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
          <div className="mt-4 text-sm text-gray-600 mb-4">
            <p><strong>Selected Filters:</strong></p>
            <p>{selectedFilters.gender || ''}</p>
            <p>{selectedFilters.age || ''}</p>
            <p>{selectedFilters.genres || ''}</p>
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
              {filteredItems.length > 0 ? (
                filteredItems.map((product) => (
                  <div key={product.id} className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 mb-4 rounded-lg">
                    <h5 className="mb-2 text-xl font-medium text-black">{product.name}</h5>
                    <p className="mb-4 text-base text-black">Category: {product.category}</p>
                    <p className="text-xs text-surface/75 dark:text-neutral-300">
                      Age: {product.age} - Genre: {product.genre || 'N/A'}
                    </p>
                  </div>
                ))
              ) : (
                <p>No products found matching the selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
   <Footer/>
   </>
);
}
export default Category