import React, { useState } from 'react';
import Header from './Header';
import { heroBackground } from '../assets';
import Section from './Section';
import Button from './Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Generating from './Generating';
import { known } from '../constants';

function LearnMore() {

	const [searchtext,setsearchtext] = useState(false);

	const handleSubmit = async () => {
		try {
	const response = await fetch(`https://localhost:5432/search?query=${text}`);
	const data = await response.json();
	setResults(data.results);
} catch (error) {
	console.error("Error fetching data:", error);
}
};

const handleClick = () => {
	// Delay navigation by 2 seconds
	setTimeout(() => {
		setsearchtext(true);
 // Navigate to the /identify-data route
	}, 2000);
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

				{/* Card with input and buttons */}
				<div className="relative p-16 space-y-12 text-center">
					{/* Card Background */}
					<div className="absolute inset-0 bg-black opacity-50 shadow-xl rounded-2xl p-16"></div>

					{/* Content */}
					<div className="relative z-20 text-white">
						{/* Input Field */}
						<Generating className="relative left-4 right-4 bottom-5 mt-2 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2
          flex items-center justify-center h-11 transition-colors text-white" />

						{/* Buttons */}
						<div className="flex justify-center space-x-12 mt-12">
				
							<button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
							onClick={handleClick}
							>
								LearnMore
							</button>
						

							<Link to="/tools">
							<button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
								Back to Tools
							</button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Section */}
			<Section>
        {searchtext && known.map((job, index) => (
          <div key={index} className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-gray-900 rounded-lg shadow-md">
              {/* Job Title */}
              <div className="text-4xl font-bold text-white">
			  {job.Name}
              </div>


              {/* Description */}
              <div className="body-2 p-4 mt-2 text-gray-400">
                {job.KnownFor}
              </div>
			  <div className="body-2 p-4 mt-2 text-gray-400">
                {job.Biography}
              </div>
			  <div className="body-2 p-4 mt-2 text-gray-400">
                {job.Birthday}
              </div>

              <Link to="/tools">
				<button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
					Back to Tools
				</button>
				</Link>
              </div>
            </div>
          
        ))}
      </Section>

			<Footer />
		</div>
	);
}

export default LearnMore;
