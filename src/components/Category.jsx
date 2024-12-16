
import {Section} from './index';
import { useLocation, useParams } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

const customers = [
 {
   name: "Tania Andrew",
   email: "tania@gmail.com",
   price: 400,
   image:
     "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
 },
 {
   name: "John Micheal",
   email: "john@gmail.com",
   price: 420,
   image:
     "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
 },
 {
   name: "Alexa Liras",
   email: "alexa@gmail.com",
   price: 340,
   image:
     "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
 },
 {
   name: "Richard Gran",
   email: "richard@gmail.com",
   price: 520,
   image:
     "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
 },
 {
   name: "Micheal Levi",
   email: "levi@gmail.com",
   price: 780,
   image:
     "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
 },
];

const posts = [
   {
     title: "Singer",
     description: "Description of your post/article, Description of your post/article.",
     imageUrl: "https://via.placeholder.com/150",
     link: "https://amitpachange.com"
   },
   {
     title: "actor",
     description: "Another description of your post/article.",
     imageUrl: "https://via.placeholder.com/150",
     link: "https://example.com"
   },
   {
     title: "Dancer",
     description: "Yet another description of your post/article.",
     imageUrl: "https://via.placeholder.com/150",
     link: "https://example.org"
   },
 ];

function Category(item) {
    
   console.log('item ---',item)
   const location = useLocation();  // Access the location object (state)
 const { title } = useParams(); 

   const url = "https://jsonplaceholder.typicode.com/users";
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Filter data based on the title passed via the route
        const filteredData = data.filter((post) => post.title.includes(title)); // Example filtering by title
        setUserData(filteredData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

 
//    const fetchUsers = () => {
//      fetch(url)
//        .then((res) => {
//          if (!res.ok) {
//            throw new Error('Network response was not ok');
//          }
//          return res.json();
//        })
//        .then((d) => setUserData(d))
//        .catch((error) => {
//          console.error('There was a problem with the fetch operation:', error);
//        });
//    };
   console.log('fetched users- ',userData);
 
   useEffect(() => {
     fetchUsers();
   }, []);

 // Access the route parameter (e.g., 'Singer')

 // Fetch the users data by matching the item title passed via route
 const users = userData.filter(post => post.title === title);  // Find the post by title
 
//   if (!users.length) {
//     return <div>Item not found!</div>;  // Handle the case if no post is found
//   }
   
 return (
   <Section className="">
        {/* <Card className="flex flex-col">
     <CardBody>
       <div className="mb-4 flex items-center justify-between">
         <Typography variant="h5" color="blue-gray" className="">
           Latest Customers
         </Typography>
         <Typography
           as="a"
           href="#"
           variant="small"
           color="blue"
           className="font-bold"
         >
           View all
         </Typography>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {customers.map(({ name, email, price, image }, index) => (
           <div
             key={index}
             className="flex items-center justify-between pb-3 pt-3 last:pb-0"
           >
             <div className="flex items-center gap-x-3">
               <Avatar size="sm" src={image} alt={name} />
               <div>
                 <Typography color="blue-gray" variant="h6">
                   {name}
                 </Typography>
                 <Typography variant="small" color="gray">
                   {email}
                 </Typography>
               </div>
             </div>
             <Typography color="blue-gray" variant="h6">
               ${price}
             </Typography>
           </div>
         ))}
       </div>
     </CardBody>
   </Card> */}
    <div className="max-w-2xl mx-auto mt-24">
     {users.map((user, index) => (
       <div
         key={index}
         className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mb-4"
       >
         <div className="relative w-32 h-32 flex-shrink-0">
           <img
             className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
             loading="lazy"
             src={user.imageUrl}
             alt={`Image for ${user.title}`}
           />
         </div>

         <div className="flex flex-col gap-2 py-2">
           <p className="text-xl font-bold">{user.title}</p>
           <p className="text-gray-500">{user.description}</p>
           <span className="flex items-center justify-start text-gray-500">
             <svg
               className="w-4 h-4 mr-1 mt-1"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 fillRule="evenodd"
                 d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                 clipRule="evenodd"
               ></path>
             </svg>
             <a href={user.link} target="_blank" rel="noopener noreferrer">
               {new URL(user.link).hostname}
             </a>
           </span>
         </div>
       </div>
     ))}
   </div>

   </Section>
  
 );
}
export default Category