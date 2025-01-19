import React, { useState } from 'react';
import Header from './Header';
import { heroBackground } from '../assets';
import Section from './Section';
import Button from './Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Summarize() {
	const [text, setText] = useState('');
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

	const copyToClipboard = () => {
		navigator.clipboard.writeText(response);
		alert('Response copied to clipboard!');
	};

	const navigate = useNavigate();

	const handleClick = () => {
	  // Delay navigation by 2 seconds
	  setTimeout(() => {
		navigate('/summarize-data');  // Navigate to the /identify-data route
	  }, 2000);
	};

	return (
		<div className="h-screen w-screen relative">
		{/* Background */}
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
		<div className="flex flex-col items-center justify-center min-h-screen z-10 relative p-8">
			<Header />

			{/* Card Section */}
			<div className="relative p-12 bg-black bg-opacity-60 rounded-2xl shadow-lg w-full max-w-3xl">
				<h2 className="text-white text-2xl font-bold mb-4 text-center">
					Summarize Your Text
				</h2>

				{/* Input Field */}
				<textarea
					value={text}
					onChange={handleInputChange}
					placeholder="Type your text here..."
					rows="5"
					className="w-full p-4 text-white rounded-lg text-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
				/>

				{/* Action Buttons */}
				<div className="flex justify-center space-x-6 mt-6">
					{/* //<Link to="/summarize-data"> */}
					<button
						onClick={handleClick}
						className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
					>
						Summarize
					</button>

					<Link to="/tools">
												<button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
													Back to Tools
												</button>
												</Link>
				</div>

				{/* Scrollable Response Section */}
				{results && (
					<div className="mt-8 p-4 bg-gray-800 rounded-lg overflow-auto max-h-48">
						<p className="text-white whitespace-pre-line">{response}</p>

						{/* Copy Button */}
						<button
							onClick={handleCopy}
							className="mt-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600"
						>
							Copy to Clipboard
						</button>
					</div>
				)}
			</div>
		</div>

		<Footer />
	</div>
    );
}

export default Summarize;