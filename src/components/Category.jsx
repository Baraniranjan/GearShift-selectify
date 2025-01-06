 
import { useState,useEffect } from 'react';
import Section from './Section';
import Dropdown from './Dropdown';
import Header from './Header';
import { useLocation } from'react-router-dom';
import { useParams } from 'react-router-dom';
//import { navigation } from '';
const posts = [
 {
   title: "Singer",
   description: "Description of your post/article, Description of your post/article.",
   imageUrl: "https://via.placeholder.com/150",
   link: "https://amitpachange.com",
   age:24,
   gender:'female',
   genres:"Suspense"
 },
 {
   title: "actor",
   description: "Another description of your post/article.",
   imageUrl: "https://via.placeholder.com/150",
   link: "https://example.com",
   age:24,
   gender:'male',
   genres:"rom com"
 },
 {
   title: "Dancer",
   description: "Yet another description of your post/article.",
   imageUrl: "https://via.placeholder.com/150",
   link: "https://example.org",
   age:25,
   gender:'female',
   genres:"thriller"
 },
];
function Category(item) {
  const [userData,setUserData] = useState([])
   const [filteredData,setFilteredData] = useState([])
   const [selectedFilters, setSelectedFilters] = useState({
       gender: '',
       age: 0,
       genres: ''
   });
   const [query, setQuery] = useState("");
   const location = useLocation();
//    const { query } = useParams();
//    console.log('q',query);
   useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log('loc',location.search)
    console.log('params ' ,urlParams)
    const queryParam = urlParams.get("q") || "";
    console.log('search param - ',queryParam)
    setQuery(queryParam);
}, [location.search]); 
// useEffect(()=>{
//     let fetchedData = userData.filter(user => user.title.includes(query))
//     setFilteredData(fetchedData);
// },[userData,query]);
    
   const filterData = [
       {
         label: 'Gender',          // Label for the dropdown
         options: ['Male','Female'], // Options for this dropdown
         name: 'gender'
       },
       {
         label: 'Age',
         options: ['20-30', '30-40', 'above 40'],
         name: 'years'
       },
       {
         label: 'Genres',
         options: ['Action', 'Action/Drama', 'Dance', 'Musical', 'Sci fiction', 'Romance', 'Rom-Com', 'Comedy', 'Drama','Political Thriller'],
         name: 'genres'
       },
     ];
    //  useEffect (()=>{
    //     const fetchData = async () => {
    //         try {
    //           setLoading(true);
    //           const response = await fetch(url);
    //           if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //           }
    //           else{
    //             console.log(response.json())
    //           }
    //           const data = await response.json();
    //           console.log(typeof data);
    //           // Filter data based on the title passed via the route
    //           const filteredData = data.filter((post) => post.title.includes(title)); // Example filtering by title
    //           // const filteredData = Object.fromEntries(
    //           //   Object.entries(data).filter(([key, user]) => user.age > 20)
    //           // ); // Example filtering by title
    //           console.log('filtered data-', filteredData)
    //           //setUserData(filteredData);
    //           setUserData(posts);
    //           setFilteredData(posts)
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
      
    //  },[]);
//     useEffect(() => {
//         fetch("http://localhost:5432/profiles")
//         .then((res) => res.json())
//         .then((data) => {
//             setUserData(data);
//             //setFilteredData(data)
//         console.log('fdata', data);
    
//     });
//   }, []);


  useEffect(() => {
    if (query) {
        console.log('hi');
      const fetchData = async () => {
        try {
         
          const response = await fetch(`http://localhost:5432/profiles/${query}`);
          console.log('res',response);
          const data = await response.json();
          console.log('fdata',data);
          setUserData(data);
          setFilteredData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [query]); 
    
    
    //Get the search query from the URL (if it exists)
   
    
 
  
     const handleSelect = (filterName, selectedOption) => {
       setSelectedFilters((prevState) => ({
         ...prevState,
         [filterName]: selectedOption, // Update selected option for the specific filter
       }));
     };
   // const filteredProducts = userData.filter((product) => {
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
   // setFilteredData(filteredProducts);
   useEffect(() => {
       const filteredProducts = filteredData.filter((product) => {
         // Filter by gender
         const fdata = {r: [product.roles]}
         //console.log('f',fdata.r[0]);
         //console.log('roles', product);
         if (selectedFilters.gender && product.gender.toLowerCase() !== selectedFilters.gender.toLowerCase()) {
            //console.log(product.Gender)
           return false;
         }
  
         // Filter by years of experience (age in this case)
         if (selectedFilters.years && parseInt(selectedFilters.years) !== product.age) {
           return false;
         }
  
         // Filter by genre
         if (selectedFilters.genres && product.genres.toLowerCase() !== selectedFilters.genres.toLowerCase()) {
           return false;    
         }
  
         return true;
       });
  
       setFilteredData(filteredProducts);  // Update filtered data
     }, [selectedFilters, userData]);
   const resetFilters = () => {
       setSelectedFilters([])
       setFilteredData(userData)
     };
 
   return (
    <>
    <Header/>
       <Section>
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
           <div className="mt-4 mb-4 ml-4 text-sm text-white">
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
               {filteredData.length > 0 ? (
                 filteredData.map((product) => (
                   <div key={product.id} className="flex flex-col bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white p-6 mb-4 rounded-lg">
                     <h5 className="mb-2 text-xl font-medium text-black">{product.name}</h5>
                     <p className="mb-2 text-base text-black">Email: {product.email}</p>
                     <p className="mb-2 text-base text-black">Gender: {product.gender}</p>
                     <p className="mb-2 text-base text-black">
                       Age: {product.age} <p>
                        Genre: {product.genres || 'N/A'}</p>
                     </p>
                     <p className="mb-4 text-base text-black">Ethnicity: {product.ethnicity}</p>
                     <p className="mb-4 text-base text-black">Skills: {product.skills.join(', ')}</p>
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
     </>
      
  );
}
export default Category
 