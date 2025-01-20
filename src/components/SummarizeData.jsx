import { summarize, summary } from "../constants";
import Section from "./Section";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function SummarizeData() {

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

	return (
		<>
		<div>
      		<Header/>
    	</div>
		<Section>
        {summarize.map((job, index) => (
          <div key={index} className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-gray-900 rounded-lg shadow-md">
              {/* Job Title */}
              <div className="text-4xl font-bold text-white">

              </div>


              {/* Description */}
              <div className="body-2 p-4 mt-2 text-gray-100">
                {job.text}
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

		</>
	);
}