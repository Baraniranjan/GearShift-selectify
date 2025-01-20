import { summary } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function IdentifyData() {

	// const [summerizeData,setSummerizeData] = useState('');
	// useEffect(() => {
    // const fetchData = async () => {
	// 		try {
         
	// 			const response = await fetch("http://localhost:5173/summarize-data");
	// 			console.log('res',response);
	// 			const data = await response.json();
	// 			console.log('fdata',data);
	// 			setUserData(data);
	// 			setFilteredData(data);
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error);
	// 		}

	// 	}

	// }, []);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowData(true);  // This will trigger rendering of <IdentifyData /> after 2 seconds
    }, 2000);

    // Cleanup timeout if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

	return (
		<>
    <div>
      <Header/>
    </div>
		<div className="p-8 mt-16">
      <h1 className="text-2xl font-bold mb-6">Character Information Table</h1>
      <div className="overflow-auto">
        <table className="w-full table-auto border-collapse border border-gray-900">
          <thead>
            <tr className="bg-gray-900">
              <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Gender</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Roles</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Script Context</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item, index) => (
              <tr key={index} className="bg-gray-900">
                <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                <td className="border border-gray-300 px-4 py-2">{item.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                <td className="border border-gray-300 px-4 py-2">{item.roles}</td>
                <td className="border border-gray-300 px-4 py-2">{item.script_context}</td>
                <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/tools">
												<button className="px-8 py-4 bg-gradient-to-r from-blue-800 to-purple-500 text-white font-semibold rounded-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
													Back to Tools
												</button>
												</Link>
    </div>
		</>
	);
}