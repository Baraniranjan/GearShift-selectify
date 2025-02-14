import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { heroBackground } from '../assets';
import ScreenProfileTable from './ScreenProfileTable';
import { Link } from 'react-router-dom';

function ScreenProfiles() {
  const [tableData, setTableData] = useState([]);  // State to store API data
  const [loading, setLoading] = useState(false);   // Loading state
  const [error, setError] = useState(null);        // Error state
  const [text, setText] = useState('');
	const [button,setButton] =useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

	const handleSubmit = async () => {
		try {
	const response = await fetch(`https://localhost:5432/search?query=${text}`);
	const data = await response.json();
	setResults(data.results);
} catch (error) {
	console.error("Error fetching data:", error);
}
};

  const handleFetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Example API endpoint (update with actual URL)
      const response = await fetch(`https://localhost:5432/search?query=${text}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setTableData(data.results || []);  // Set fetched data to table
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="flex flex-col items-center justify-center h-full space-y-8 z-10 relative">
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
                        onClick={handleSubmit}
                        className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                    >
                        Fetch and Show Table Data
                    </button>
 
                    <Link to="/tools">
                                                <button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                                                    Back to Tools
                                                </button>
                                                </Link>
                </div>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && <p className="text-white">Loading data...</p>}

        {/* Error Message */}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Table Section */}
      { button ? <ScreenProfileTable data={tableData} /> : null} 
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ScreenProfiles;
