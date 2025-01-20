import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { ProjectCard } from "./ProjectCard";
import { actor, camera, dancer, scriptwriter, singer, vfxartist, voice } from "../assets";
import { heroBackground } from "../assets";
import { filterData } from "../constants";
import { Dropdown } from "./index"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

// const CardDetailModal = ({ member, onClose }) => {
//     return (
//         <div className="card-modal">
//             <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//                 <div className="bg-white p-6 rounded-lg w-96">
//                     <div className="text-center mb-6">
//                         <img
//                             className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg mx-auto"
//                             src={member.image_path}
//                             alt={member.name}
//                         />
//                         <p className="text-2xl font-bold">{member.name}</p>
//                         <p className="text-lg text-gray-500">{member.role}</p>
//                     </div>
//                     <div className="space-y-4">
//                         <p><strong>Title:</strong> {member.title}</p>
//                         <p><strong>Gender:</strong> {member.gender}</p>
//                         <p><strong>Ethnicity:</strong> {member.ethnicity}</p>
//                         <p><strong>Location:</strong> {member.location}</p>
//                         <p><strong>Roles:</strong> {member.roles.join(', ')}</p>
//                         <p><strong>Skills:</strong> {member.skills}</p>
//                     </div>
//                     <div className="mt-6 flex justify-center">
//                         <button
//                             className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//                             onClick={onClose}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     );
// };

// const CardDetailModal = ({ member, onClose }) => {
//     return (
//       <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded-lg w-4/5 max-w-4xl h-96 flex">
      
//           <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/3">
//             <img
//               className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
//               src={member.image_path}
//               alt={member.name}
//             />
//             <p className="mt-4 text-xl font-bold text-center" style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}>{member.name}</p>
//             <p className="text-lg text-gray-500 text-center" style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}>{member.role}</p>
//           </div>
  
//           <div className="flex-grow overflow-y-auto px-6">
//             <h2 className="text-xl font-bold mb-4">Details</h2>
//             <div className="space-y-3">
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Title:</strong> {member.title}</p>
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Gender:</strong> {member.gender}</p>
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Ethnicity:</strong> {member.ethnicity}</p>
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Location:</strong> {member.location}</p>
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Roles:</strong> {member.roles.join(', ')}</p>
//               <p style={{ color: '#000', fontSize: '16px', textAlign: 'left' }}><strong>Skills:</strong> {member.skills.join(', ')}</p>
//             </div>
//           </div>
  
//           {/* Close Button */}
//           <div className="mt-4 flex justify-center">
//       <button
//         className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//         </div>
//       </div>
//     );
//   };

const staticData = [
    {
      "age": 30,
      "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
      "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
      "email": "amara.chen@email.com",
      "ethnicity": "Asian (Chinese)",
      "experience": 12,
      "gender": "Female",
      "image_path": "/candidates/amara.chen.jpg",
      "location": "Singapore",
      "name": "Amara Chen",
      "phone": "+65 9876125432",
      "roles": [
          "Singer",
          "Musician"
      ],
      "score": 85,
      "skills": [
          "Singer",
          "Musician",
          "Song writing",
          "Live Performance",
          "Multilingual"
      ]
  },
  {
    "age": 30,
    "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
    "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
    "email": "amara.chen@email.com",
    "ethnicity": "Asian (Chinese)",
    "experience": 12,
    "gender": "Female",
    "image_path": "/candidates/amara.chen.jpg",
    "location": "Singapore",
    "name": "Amara Chen",
    "phone": "+65 9876125432",
    "roles": [
        "Singer",
        "Musician"
    ],
    "score": 85,
    "skills": [
        "Singer",
        "Musician",
        "Song writing",
        "Live Performance",
        "Multilingual"
    ]
  },
  {
    "age": 30,
    "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
    "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
    "email": "amara.chen@email.com",
    "ethnicity": "Asian (Chinese)",
    "experience": 12,
    "gender": "Female",
    "image_path": "/candidates/amara.chen.jpg",
    "location": "Singapore",
    "name": "Amara Chen",
    "phone": "+65 9876125432",
    "roles": [
        "Singer",
        "Musician"
    ],
    "score": 85,
    "skills": [
        "Singer",
        "Musician",
        "Song writing",
        "Live Performance",
        "Multilingual"
    ]
  },
  {
    "age": 30,
    "awards": "Winner, Best Female Vocalist - Singapore Music Awards (2020). Nominee, Best Pop Album - Golden Melody Awards (2018). Winner, Breakthrough Artist of the Year - Asia Music Awards (2015)",
    "career": "Provided vocals for several hit tracks in collaboration with well-known Asian producers and composers.Recorded theme songs for TV dramas and commercials, gaining widespread recognition in Southeast Asia.Developed a reputation for versatility, from romantic ballads to high-energy electronic dance tracks.",
    "email": "amara.chen@email.com",
    "ethnicity": "Asian (Chinese)",
    "experience": 12,
    "gender": "Female",
    "image_path": "/candidates/amara.chen.jpg",
    "location": "Singapore",
    "name": "Amara Chen",
    "phone": "+65 9876125432",
    "roles": [
        "Singer",
        "Musician"
    ],
    "score": 85,
    "skills": [
        "Singer",
        "Musician",
        "Song writing",
        "Live Performance",
        "Multilingual"
    ]
  },
  ]
const CardDetailModal = ({ member, onClose }) => {
    return (
        <div className="card-detail-modal"  
        // style={{
        //     background: `url(${heroBackground})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center center',
        //     zIndex: -1,
        //   }}
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-4/5 max-w-4xl flex relative">
  
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/3">
            <img
              className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
              src={member.image_path}
              alt={member.name}
            />
            <p className="mt-4 text-xl font-bold text-center" style={{ color: '#000', fontSize: '16px' }}>{member.name}</p>
            <p className="text-lg text-gray-500 text-center"style={{ color: '#000', fontSize: '16px' }}>{member.role}</p>
          </div>
  
          <div className="flex-grow px-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#000', fontSize: '24px' }}>Details</h2>
            <div className="space-y-3">
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Gender:</strong> {member.gender}</p>
              <p style={{ color: '#000', fontSize: '16px'}}><strong>Experience:</strong> {member.experience}</p>
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Ethnicity:</strong> {member.ethnicity}</p>
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Location:</strong> {member.location}</p>
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Awards:</strong> {member.awards}</p>
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Roles:</strong> {member.roles.join(', ')}</p>
              <p style={{ color: '#000', fontSize: '16px' }}><strong>Skills:</strong> {member.skills.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

        </div>
      
    );
  };
export const Project = () => {
    const [category, setCategory] = useState("");
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showfilters, setShowFilters] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); // Store the selected card data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        gender: '',
        age: 0,
        genres: '',
        ethnicity: '',
        experience: 0
    });
    //const [cartItems, setCartItems] = useState([]);

    const projects = [
        { id: "1", title: "Actor", description: "Design & Development", imgUrl: actor },
        { id: "2", title: "Camera", description: "Design & Development", imgUrl: camera },
        { id: "3", title: "Dancer", description: "Design & Development", imgUrl: dancer },
        { id: "4", title: "Script Writer", description: "Design & Development", imgUrl: scriptwriter },
        { id: "5", title: "Singer", description: "Design & Development", imgUrl: singer },
        { id: "6", title: "VFX Artist", description: "Design & Development", imgUrl: vfxartist },
        { id: "7", title: "Voice Artist", description: "Design & Development", imgUrl: voice },
    ];

    useEffect(() => {
        if (category) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:5432/profiles/${category}`);
                    const data = await response.json();
                    setUserData(data);
                    setFilteredData(data);  // Update with fetched data
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
    }, [category]);

    useEffect(() => {
        const filteredProducts = filteredData.filter((product) => {
            // Filter by gender
            const fdata = { r: [product.roles] }
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

            if (selectedFilters.ethnicity && product.ethnicity.toLowerCase() !== selectedFilters.ethnicity.toLowerCase()) {
                return false;
            }

            if (selectedFilters.experience && parseInt(selectedFilters.experience) !== product.experience) {
                return false;
            }

            return true;
        });

        setFilteredData(filteredProducts);  // Update filtered data
    }, [selectedFilters, userData]);

    // Handle clicking on the description to fetch category data
    const handleClick = (title) => {
        setShowFilters(true);
        setCategory(title); // Set the category to fetch the corresponding data
        setTimeout(() => {
            const resultsSection = document.getElementById('filteredResults');
            if (resultsSection) {
                resultsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleSelect = (filterName, selectedOption) => {
        event.preventDefault();
        setSelectedFilters((prevState) => ({
            ...prevState,
            [filterName]: selectedOption, // Update selected option for the specific filter
        }));
    };

    const resetFilters = () => {
        setSelectedFilters([])
        setFilteredData(userData)
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const handleCardClick = (member) => {
        setSelectedCard(member);
        setIsModalOpen(true);
    };

    //   const addToCart = (product) => {
    //     setCartItems((prevItems) => {
    //         const itemExists = prevItems.find((item) => item.id === product.id);
    //         if (itemExists) {
    //             return prevItems.map((item) =>
    //                 item.id === product.id ? { ...item, quantity: 
    //                 item.quantity + 1 } : item
    //             );
    //         } else {
    //             return [...prevItems, { ...product, quantity: 1 }];
    //         }
    //     });
    // };

    return (
        <section className="project" id="projects">
            <div
                className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    zIndex: -1,
                }}
            ></div>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {/* <Row> */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {
                                            projects.map((project, index) => (
                                                <ProjectCard
                                                    key={project.title}
                                                    {...project}
                                                    handleClick={handleClick}  // Pass handleClick to ProjectCard
                                                />
                                            ))
                                        }
                                        </div>
                                    {/* </Row> */}
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src="" alt="Background shape" />

            <div className="flex w-full justify-center mx-auto p-4 rounded-lg shadow-md ">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 justify-center">
                        {showfilters ? (filterData.map((filter, index) => (
                            <div className="flex ">
                                <Dropdown
                                    key={filter.label}
                                    label={filter.label}
                                    options={filter.options}
                                    onSelect={(selectedOption) =>
                                        handleSelect(filter.name, selectedOption)
                                    }
                                    className="w-full max-w-xs"
                                />


                            </div>

                        ))) : null}
                        {showfilters ? <div className="">
                            <button
                                onClick={resetFilters}
                                className="bg-blue-500 text-white p-2 font-semibold rounded-md w-full max-w-xs"
                            //    "flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-black font-semibold shadow-sm ring-1 ring-inset ring-gray-300 bg-n-14 hover:bg-white"
                            >
                                Reset Filters
                            </button>
                        </div> : null}

                       

                    </div>
                </div>



            </div>

            <div className="mt-10 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10" id="filteredResults">
            {filteredData.map((member, index) => (
              <div key={index} className="w-full bg-black rounded-lg shadow-lg p-8 flex flex-col justify-between h-full cursor-pointer relative" onClick={() => handleCardClick(member)}>

<div
          className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full flex justify-center items-center 
                      ${member.score > 80 ? 'bg-green-800' : 'bg-orange-800'} text-white text-xl font-bold`}
        //   style={{
        //     clipPath: 'polygon(100% 0, 0 0, 0 100%)', // Creates the quarter-circle shape
        //   }}
        style={{ borderBottomLeftRadius: '100%' }}
        >
          {member.score}
        </div>

                <div className="mb-6 flex justify-center">
                  <img
                    className="object-center object-cover rounded-full h-48 w-48 border-4 border-white shadow-lg"
                    src={member.image_path}
                    alt={member.name}
                  />
                </div>
                <div className="text-center flex flex-col justify-between h-full">
                  <span className="text-l text-white font-bold mb-1">{member.name}</span>
                  <span className="text-base text-gray-400 font-normal">{member.location}</span>
                  <span className="text-base text-gray-400 font-normal mb-1">{member.role}</span>
                  <span className="text-base text-gray-400 font-normal mb-1">Experience :{member.experience} years</span>
                  <span className="text-xl text-white font-normal mb-1">{member.title}</span>

                  <div className="mt-1 text-l font-bold text-white">
                    Ethnicity : {member.ethnicity}
                  </div>
                  {/* <p className="text-base text-gray-400 font-normal">{member.ethnicity}</p> */}

                  <div className="mt-1 text-l font-bold text-white">
                    Roles : {member.roles.join(', ')}
                  </div>
                  {/* <p className="text-base text-gray-400 flex justify-center font-normal">{member.roles.join(', ')}</p> */}
                </div>

                <div className="flex gap-6 justify-center mt-6">
                  <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                    <button className="ml-1">Email</button>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-purple-400 text-white font-semibold rounded-md hover:bg-purple-800 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 5 9-5v12H3V7z" />
                    </svg>
                    <button className="ml-2">Add to Movie</button>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


            {isModalOpen && selectedCard && (
                <CardDetailModal member={selectedCard} onClose={closeModal} />
            )}
        </section>
    );
};
