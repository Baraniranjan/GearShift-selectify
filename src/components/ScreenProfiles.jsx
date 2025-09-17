import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { summary } from "../constants";
import { useNavigate } from 'react-router-dom';

import { heroBackground } from '../assets';
import Section from './Section';

function ScreenProfiles() {
	const [text,setText] =useState('');
  const [tableData, setTableData] = useState([]);  // State to store API data
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState(null);
	const [button,setButton] =useState(false);

    const [results, setResults] = useState('');
  
    const handleInputChange = (e) => {
      setText(e.target.value);
    };
  
    const handleSubmit = async () => {
      try {
        const response = await fetch(`http://localhost:5432/search?q=${text}`);
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

	        // Error state

  const navigate = useNavigate();

  const handleClick = () => {
    // Delay navigation by 2 seconds
    setTimeout(() => {
      navigate('/identify-data');  // Navigate to the /identify-data route
    }, 2000);
  };


	// 	const handleSubmit = async () => {
	// 		try {
	// 	const response = await fetch(`https://localhost:5432/search?query=${text}`);
	// 	const data = await response.json();
	// 	setResults(data.results);
	// } catch (error) {
	// 	console.error("Error fetching data:", error);
	// }
	// };
				 
  // const handleFetchData = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     // Example API endpoint (replace with actual API URL)
  //     const response = await fetch('https://localhost:5432/data3');
      
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }

  //     const data = await response.json();
  //     setTableData(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="h-screen w-screen relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2"
        style={{
          background: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          zIndex: -1,
        }}
      ></div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full space-y-8 z-10 relative p-8">
        <Header />


        {/* Card Section */}
        <div className="relative p-12 bg-black bg-opacity-60 rounded-2xl shadow-lg w-full max-w-3xl">
          <div className="text-white text-2xl font-bold mb-4 text-center"></div>
          {/* Content */}
          <div className="relative z-20 text-white">
     <div className="p-6 rounded-lg">
     <textarea
					value={text}
					onChange={handleInputChange}
					placeholder="Type your text here..."
					rows="5"
					className="w-full p-4 text-white rounded-lg text-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
				/>
            </div>
            {/* Button to Fetch Data */}
            <div className="flex justify-center space-x-6 mt-6">

                    <button
                        onClick={handleClick}
                        className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                    >
                        Fetch Roles
                    </button>

 
                    <Link to="/tools">
                                                <button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                                                    Back to Tools
                                                </button>
                                                </Link>
                </div>
          </div>
        </div>

        <Section>
        
        {loading && <p className="text-white">Loading data...</p>}

        
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Table Section */}
        {summary.length > 0 && (
          <div className=" mt-8 bg-black p-20 rounded-lg shadow-lg max-h-96">
            {/* <p>{response}</p> */}
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-black">
                  <th className="border border-gray-300 px-4 py-2 text-left">Roles</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Script Context</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Profile</th>
                </tr>
              </thead>
              <tbody>
                {summary.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-900">
                    {/* <td className="border border-gray-300 px-2 py-2">
                      <p>{item.roles}</p>
                      <p>{item.age}</p></td>
                    <td className="border border-gray-300 px-2 py-2">{item.script_context}</td>
                    <td className="border border-gray-300 px-2 py-2">{item.description}</td>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex p-4 justify-start"> 
                        <div className="flex flex-col items-center">
                          <img
                            src={item.imgUrl}
                            alt="Profile 1"
                            className="w-16 h-16 rounded-full object-cover mb-2"
                          />
                          <p>{item.name1}</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <img
                            src={item.imgUrl}
                            alt="Profile 2"
                            className="w-16 h-16 rounded-full object-cover mb-2"
                          />
                          <p>{item.name2}</p>
                        </div>
                        <div className="flex flex-col items-center ">
                          <img
                            src={item.imgUrl}
                            alt="Profile 3"
                            className="w-16 h-16 rounded-full object-cover mb-2"
                          />
                          <p>{item.name3}</p>
                        </div>
                      </div>
                    </td> */}
                    <td className="border border-gray-300 px-4 py-2 w-1/4">
                        <p>{item.roles}</p>
                        <p>{item.age}</p>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">{item.script_context}</td>
                      <td className="border border-gray-300 px-4 py-2 w-1/4">{item.description}</td>
                      
                      <td className="border border-gray-300 px-4 py-2 w-1/4">
                        <div className="flex justify-between space-x-4">
                          {/* Profile 1 */}

                            <div className="flex flex-col items-center">
                              <img
                                src={item.imgUrl} // Access the first image in the array
                                alt="Profile 1"
                                className="w-16 h-16 rounded-full object-cover mb-2"
                              />
                              <p>Tom Cruise</p>
                            </div>


                            <div className="flex flex-col items-center">
                              <img
                                src={item.imgUrl} // Access the second image in the array
                                alt="Profile 2"
                                className="w-16 h-16 rounded-full object-cover mb-2"
                              />
                              <p>Will Smith</p>
                            </div>


                          {/* Profile 3 */}
                            <div className="flex flex-col items-center">
                              <img
                                src={item.imgUrl} // Access the third image in the array
                                alt="Profile 3"
                                className="w-16 h-16 rounded-full object-cover mb-2"
                              />
                              <p>Di Caprio</p>
                            </div>
                        </div>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </Section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ScreenProfiles;